import React from 'react'
import { Link } from 'react-router-dom'
import Joystick from '../images/Joystick.png'
import '../css/Header.css'

export default function Header(props) {
  const { currentUser } = props
  return (
    <header>
      <Link to='/'>
        <h1 className='site-logo'> Joystix</h1>
      </Link>
      <img src={Joystick} />
      {currentUser ? (
        <div className='login-register-option'>
          <p>{currentUser.username}</p>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login' className='login-register-option'>
          Log-In/Register
        </Link>
      )}
    </header>
  )
}
