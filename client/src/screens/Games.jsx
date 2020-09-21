import React from 'react'
import { Link } from 'react-router-dom'
import Mario from '../images/Mario.png'
import GameCard from '../components/GameCard'
import '../css/Games.css'

export default function Games(props) {
  const {
    currentUser,
    games,
    handleDelete,
    isToggled,
    isDelete,
    confirmDelete,
  } = props
  console.log(props)

  return (
    <div>
      {currentUser ? (
        <div>
          <h2 className='my-games-title'>My Games</h2>
          {games
            .filter((game) => currentUser.id === game.user_id)
            .map((game) => (
              <React.Fragment key={game.id}>
                <img src={game.img_url} />
                <p>
                  Title: <Link to={`/games/${game.id}`}>{game.name}</Link>
                </p>
                <p> Year: {game.yr} </p>
                <p>Genre: {game.genre}</p>
                <p> Rating: {game.rating}</p>
                <Link to={`/games/${game.id}/edit`}>
                  <button className='games-edit-button'>Edit</button>
                </Link>
                <button className='games-delete-button' onClick={confirmDelete}>
                  Delete
                </button>
                {isToggled && (
                  <div className='module-background'>
                    <div className='module'>
                      <p>Are you sure you want to delete this game?</p>
                      <button
                        className='games-cancel-button'
                        onClick={confirmDelete}
                      >
                        Cancel
                      </button>
                      <button
                        className='games-delete-button'
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
              </React.Fragment>
            ))}
          <Link to='/games/new'>Add a Game</Link>
        </div>
      ) : (
        <div>
          <img src={Mario} alt='8 bit-Mario' />
          <h1 className='sorry-text'>
            Sorry, your games are in another castle! Please log in to see your
            Games.
          </h1>
        </div>
      )}
    </div>
  )
}
