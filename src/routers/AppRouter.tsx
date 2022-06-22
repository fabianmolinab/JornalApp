import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { login } from '../actions/auth'
import { JornalScreen } from '../components/journal/JornalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter: React.FC = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // useEffect solo se dispara al iniciar la aplicación se encarga de mantener el estado de la autenticación
  useEffect(() => {

    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

      setChecking(false)
    })
  }, [dispatch, setChecking])

  if (checking) {
    return <h1>Espere...</h1>
  }

  return (
    <Switch>
      <Route path="/auth" component={AuthRouter} />
      <Route path="/" component={JornalScreen} />
    </Switch>
  )
}
