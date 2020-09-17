import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
  return (
    <div>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
