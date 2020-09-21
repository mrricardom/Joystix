import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../css/GameCard.css'

export default function GameCard(props) {
  const {
    game,
    handleDelete,
    currentUser,
    confirmDelete,
    isToggled,
    isDelete,
  } = props
  const history = useHistory()

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
          <div className='card-buttons'>
            <Link to={`/games/${game.id}/edit`}>
              <button className='card-edit'>Edit</button>
            </Link>
            <button className='card-delete' onClick={confirmDelete}>
              Delete
            </button>
            {isToggled && (
              <div className='module-background'>
                <div className='module'>
                  <p>Are you sure you want to delete this game?</p>
                  <button onClick={confirmDelete}>Cancel</button>
                  <button
                    className='card-delete'
                    onClick={() => {
                      handleDelete(game.id)
                      confirmDelete()
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
