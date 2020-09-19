import React from 'react'
import { Link } from 'react-router-dom'

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
                      <p>This is Module</p>
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
          <h1>Arcade</h1>
          {games.map((game) => (
            <React.Fragment key={game.id}>
              <Link to={`/games/${game.id}`}>
                <p> {game.name}</p>
              </Link>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}
