import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { JornalScreen } from '../components/journal/JornalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter: React.FC = (props: {}) => {
  return (
    <Switch>
      <Route path="/auth" component={AuthRouter} />
      <Route path="/" component={JornalScreen} />
    </Switch>
  )
}
