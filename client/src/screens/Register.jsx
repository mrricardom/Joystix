import React, { useState } from 'react'
import '../css/Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  })
  const { username, email, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='register-container'>
      <p className='app-description'>
        <strong>Joystix</strong> is an app designed for to the casual through
        hardcore video-game enthusiast. Nostalgia often hits and a user is
        reminded of a game they once loved. Here, a user can sign-in and log
        their favorite videogames under their account. After adding them, they
        can see a broad picture of what games they've liked. They can then edit,
        add more games, or delete an entry. A user could also see all of the
        games other users have added in the comprehensive library
      </p>
      <form
        className='register-form'
        onSubmit={(e) => {
          e.preventDefault()
          props.registerSubmit(formData)
        }}
      >
        <h2 className='register-logo'>Register</h2>
        <label className='register-label'>
          Email:
          <input
            type='text'
            name='email'
            placeholder='Email'
            autoFocus
            className='email-input'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className='register-label'>
          Username:
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='register-input'
            value={username}
            onChange={handleChange}
          />
        </label>
        <label className='register-label'>
          Password:
          <input
            type='password'
            name='password'
            placeholder='Password'
            className='register-input'
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className='register-button'>Register</button>
      </form>
    </div>
  )
}
