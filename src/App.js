import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './auth/PrivateRoute'
import { AppLayout } from './components'
import { Home, Login } from './pages'

export default function App() {
  return (
    <BrowserRouter className='container min-h-screen relative'>
      <Switch>
        <Route exact path='/login' component={Login} />
        <AppLayout>
          <PrivateRoute exact path='/' component={Home} />
        </AppLayout>
      </Switch>
    </BrowserRouter>
  )
}
