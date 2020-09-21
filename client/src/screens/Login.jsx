import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='login-container'>
      <form
        className='login-form'
        onSubmit={(e) => {
          e.preventDefault()
          props.loginSubmit(formData)
        }}
      >
        <h2 className='login-logo'>Log-in</h2>
        <label className='login-label'>
          Username:
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='input-login'
            autoFocus
            value={username}
            onChange={handleChange}
          />
        </label>
        <label className='login-label'>
          Password:
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='input-login'
            value={password}
            onChange={handleChange}
          />
        </label>
        <Link to='/register' className='register-link'>
          Not a member? Join Us!
        </Link>
        <button className='login-submit'>Log In</button>
      </form>
    </div>
  )
}
