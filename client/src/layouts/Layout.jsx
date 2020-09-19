import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>
        <Link to='/'>
          <button>Arcade</button>
        </Link>
        <Link to='/mygames'>
          <button>My Games</button>
        </Link>
        {props.children}
      </main>
      <Footer />
    </>
  )
}
