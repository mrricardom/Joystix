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
    <div>
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
        onSubmit={(e) => {
          e.preventDefault()
          props.registerSubmit(formData)
        }}
      >
        <h1>Register</h1>
        <label>
          Email:
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Username:
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className='register-button'>Register</button>
      </form>
    </div>
  )
}
