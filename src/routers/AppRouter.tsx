import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { login } from '../actions/auth'
import { JornalScreen } from '../components/journal/JornalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter: React.FC = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    const auth = getAuth()

    onAuthStateChanged(auth, (user) => {

      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }

    })
  }, [])
  return (
    <Switch>
      <Route path="/auth" component={AuthRouter} />
      <Route path="/" component={JornalScreen} />
    </Switch>
  )
}
