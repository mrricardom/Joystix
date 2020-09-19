import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getOneGame } from '../services/games'

export default function GameEdit(props) {
  const [formData, setFormData] = useState({
    img_url: '',
    rating: '',
    name: '',
    yr: '',
    genre: '',
  })
  const [game, setGame] = useState([])
  const { img_url, rating, name, yr, genre } = formData
  const { id } = useParams()
  const { games, updateSubmit } = props
  const history = useHistory()

  useEffect(() => {
    const fetchGame = async () => {
      const singleGame = await getOneGame(id)
      setGame(singleGame)
    }
    fetchGame()
  }, [])

  useEffect(() => {
    const prefillForm = () => {
      const singleGame = games.find((game) => game.id === Number(id))
      console.log(singleGame)
      setFormData({
        name: singleGame.name,
        img_url: singleGame.img_url,
        rating: singleGame.rating,
        yr: singleGame.yr,
        genre: singleGame.genre,
      })
    }
    if (games.length) {
      prefillForm()
    }
  }, [games])

  const handleChange = (e) => {
    const { name, value } = e.target
    const editData = { [name]: value }
    setFormData((formData) => {
      return { ...formData, ...editData }
    })
  }

  return (
    <div>
      <img src={game.img_url} alt='Title of game you selected' />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          updateSubmit(id, formData)
          history.push('/mygames')
        }}
      >
        <h3>Edit Game</h3>
        <label>
          Image URL:
          <input
            type='text'
            name='img_url'
            value={img_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:
          <input
            type='text'
            name='rating'
            value={rating}
            onChange={handleChange}
          />
        </label>
        <label>
          Title:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label>
          Year:
          <input type='text' name='yr' value={yr} onChange={handleChange} />
        </label>
        <label>
          Genre:
          <input
            type='text'
            name='genre'
            value={genre}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
