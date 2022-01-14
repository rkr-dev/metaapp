import React, { Fragment } from 'react'
import { Navbar, Footer } from '../../components'

export const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className='hero min-h-screen pt-16'>{children}</main>
      <Footer />
    </Fragment>
  )
}
