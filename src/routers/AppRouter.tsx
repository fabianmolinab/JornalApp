import React, { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Switch } from 'react-router-dom'
import { login } from '../actions/auth'
import { JornalScreen } from '../components/journal/JornalScreen'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter: React.FC = () => {

  const dispatch = useDispatch()

  // Estado que cambia al estar autenticando el login
  const [checking, setChecking] = useState(true)

  // Estado que cambia al estar logeado
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
      <PublicRoute path="/auth" isAutheticated={isLoggedIn} component={AuthRouter} />

      <PrivateRoute path="/" isAutheticated={isLoggedIn} component={JornalScreen} />
    </Switch>
  )
}
