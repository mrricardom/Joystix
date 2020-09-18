import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.loginSubmit(formData)
        }}
      >
        <h1>Log-in</h1>
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
        <Link to='/register'>Not a member? Join Us!</Link>
        <button>Log In</button>
      </form>
    </>
  )
}
