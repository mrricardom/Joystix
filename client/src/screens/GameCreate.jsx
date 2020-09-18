import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function GameCreate(props) {
  const [formData, setFormData] = useState({
    img_url: '',
    rating: '',
    name: '',
    yr: '',
    genre: '',
  })
  const { img_url, rating, name, yr, genre } = formData
  const { createSubmit } = props
  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target
    const newData = { [name]: value }
    setFormData((formData) => {
      return { ...formData, ...newData }
    })
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          createSubmit(formData)
          history.push('/')
        }}
      >
        <h1> New Game </h1>
        <label>
          Image URL:
          <input
            type='text'
            name='img_url'
            placeholder='Image URL'
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating (1-5):
          <input
            type='text'
            name='rating'
            placeholder='Rating'
            value={rating}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type='text'
            name='name'
            placeholder='Title'
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            type='text'
            name='yr'
            placeholder='Year'
            value={yr}
            onChange={handleChange}
          />
        </label>
        <label>
          Genre:
          <input
            type='text'
            name='genre'
            placeholder='Genre'
            value={genre}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
