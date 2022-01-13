import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import { Home, Login } from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
