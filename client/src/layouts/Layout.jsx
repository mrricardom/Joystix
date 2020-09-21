import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import '../css/Layout.css'

export default function Layout(props) {
  return (
    <div className='app-body'>
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <main>
        <Link to='/'>
          <button className='arcade-button'>Arcade</button>
        </Link>
        <Link to='/mygames'>
          <button className='mygames-button'>My Games</button>
        </Link>
        {props.children}
        <Footer />
      </main>
    </div>
  )
}
