import React from 'react'
import { Link } from 'react-router-dom'
import '../css/GameCard.css'

export default function GameCard(props) {
  const { game, handleDelete, currentUser } = props

  console.log(currentUser)

  return (
    <div className='game-container'>
      <div className='game-card'>
        <img src={game.img_url} className='card-img'></img>
        <p>Rating: {game.rating}</p>
        <p>Title: {game.name}</p>
        <p>Year: {game.yr}</p>
        <p>Genre: {game.genre}</p>
        {currentUser && currentUser.id === game.user_id && (
          <>
            <Link to='/games/:id/edit'>
              <button>Edit</button>
            </Link>
            <button onclick={() => handleDelete(game.id)}>Delete</button>
          </>
        )}
      </div>
    </div>
  )
}
