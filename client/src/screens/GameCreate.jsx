import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../css/GameCreate.css'

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
    <div className='add-form-container'>
      <form
        className='add-form'
        onSubmit={(e) => {
          e.preventDefault()
          createSubmit(formData)
          history.push('/mygames')
        }}
      >
        <h2 className='add-logo'> New Game </h2>
        <label className='add-label'>
          Image URL:
          <input
            type='text'
            name='img_url'
            className='add-img'
            autoFocus
            placeholder='Image URL'
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label className='add-label'>
          Rating (1-5):
          <input
            type='text'
            name='rating'
            className='add-rating'
            placeholder='Rating'
            value={rating}
            onChange={handleChange}
          />
        </label>
        <label className='add-label'>
          Title:
          <input
            type='text'
            name='name'
            className='add-title'
            placeholder='Title'
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className='add-label'>
          Year:
          <input
            type='text'
            name='yr'
            className='add-yr'
            placeholder='Year'
            value={yr}
            onChange={handleChange}
          />
        </label>
        <label className='add-label'>
          Genre:
          <input
            type='text'
            name='genre'
            className='add-genre'
            placeholder='Genre'
            value={genre}
            onChange={handleChange}
          />
        </label>
        <button className='newgame-submit'>Submit</button>
      </form>
    </div>
  )
}
