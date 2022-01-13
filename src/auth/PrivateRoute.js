import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={(props) =>
        JSON.parse(localStorage.getItem('user'))?.name !== undefined ? (
          <Component {...restProps} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}
