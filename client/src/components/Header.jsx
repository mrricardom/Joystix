import React from 'react'
import { Link } from 'react-router-dom'
import Joystick from '../images/Joystick.png'
import '../css/Header.css'

export default function Header(props) {
  const { currentUser } = props
  return (
    <header>
      <Link to='/' className='header-link'>
        <h1 className='site-logo'> Joystix</h1>
      </Link>
      <img src={Joystick} className='header-img' alt='8-bit Joystick icon' />
      {currentUser ? (
        <div className='login-register-option'>
          <p className='header-p'>{currentUser.username}</p>
          <button onClick={props.handleLogout} className='header-button'>
            Logout
          </button>
        </div>
      ) : (
        <Link
          to='/login'
          className='header-link'
          className='login-register-option'
        >
          Log-In/Register
        </Link>
      )}
    </header>
  )
}
