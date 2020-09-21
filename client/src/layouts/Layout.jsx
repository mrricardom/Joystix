import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useLocation } from 'react-router-dom'
import '../css/Layout.css'

export default function Layout(props) {
  const location = useLocation()
  console.log(location)

  const loginCheck = () => {
    if (location.pathname !== '/login' && location.pathname !== '/register') {
      return (
        <div className='top-buttons'>
          <Link to='/'>
            <button className='arcade-button'>Arcade</button>
          </Link>
          <Link to='/mygames'>
            <button className='mygames-button'>My Games</button>
          </Link>
        </div>
      )
    }
  }

  return (
    <div className='app-body'>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>
        {loginCheck()}
        {props.children}
        <Footer />
      </main>
    </div>
  )
}
