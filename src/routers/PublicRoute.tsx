import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

interface Props extends RouteProps {
  isAutheticated: boolean
  component: React.FunctionComponent
}

export const PublicRoute: React.FC<Props> = ({ isAutheticated, component: Component, ...rest }) => {
  return (
    <Route {...rest}
      component={(props: any) => (
        (!isAutheticated)
          ? (<Component {...props} />)
          : (<Redirect to="/" />)
      )}
    />
  )
}
