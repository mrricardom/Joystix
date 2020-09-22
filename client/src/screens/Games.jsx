import React from 'react'
import { Link } from 'react-router-dom'
import Mario from '../images/Mario.png'
import '../css/Games.css'

export default function Games(props) {
  const { currentUser, games, handleDelete } = props
  console.log(props)

  return (
    <div className='mygames-body'>
      {currentUser ? (
        <div className='mygames-container'>
          <h2 className='my-games-title'>My Games</h2>
          <div className='my-games'>
            {games
              .filter((game) => currentUser.id === game.user_id)
              .map((game) => (
                <div className='oneGame' key={game.id}>
                  <img src={game.img_url} className='mygame-img' />
                  <p className='games-link'>
                    Title: <Link to={`/games/${game.id}`}>{game.name}</Link>
                  </p>
                  <p> Year: {game.yr} </p>
                  <p> Genre: {game.genre}</p>
                  <p> Rating: {game.rating}</p>
                  <div className='games-buttons'>
                    <Link
                      className='games-buttons'
                      to={`/games/${game.id}/edit`}
                    >
                      <button className='games-edit-button'>Edit</button>
                    </Link>
                    <button
                      className='games-delete-button'
                      onClick={() => handleDelete(game.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            <div className='add-button'>
              <Link to='/games/new'>
                <button className='add-button-inner'>Add a Game</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className='sorry-page'>
          <img src={Mario} alt='8 bit-Mario' className='Mario' />
          <h1 className='sorry-text'>
            Sorry, your games are in another castle! Please log in to see your
            Games.
          </h1>
        </div>
      )}
    </div>
  )
}
