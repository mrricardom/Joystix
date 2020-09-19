import React from 'react'
import { Link } from 'react-router-dom'
import Mario from '../images/Mario.png'

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
          <h1>My Games</h1>
          {games
            .filter((game) => currentUser.id === game.user_id)
            .map((game) => (
              <React.Fragment key={game.id}>
                <Link to={`/games/${game.id}`}>
                  <p> {game.name}</p>
                </Link>
                <Link to={`/games/${game.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={confirmDelete}>Delete</button>
                {isToggled && (
                  <div className='module-background'>
                    <div className='module'>
                      <p>Are you sure you want to delete this game?</p>
                      <button onClick={confirmDelete}>Cancel</button>
                      <button
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
          <Link to='/games/new'>New Game</Link>
        </div>
      ) : (
        <div>
          <img src={Mario} alt='8 bit-Mario' />
          <h1>
            {' '}
            Sorry, your games are in another castle! Please Log in to see your
            Games.
          </h1>
        </div>
      )}
    </div>
  )
}
