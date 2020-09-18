import React, { useState, useEffect } from 'react'
import { Link, Switch, Route, useHistory } from 'react-router-dom'
import {
  getAllGames,
  getAllUserGames,
  putGame,
  deleteGame,
} from '../services/games'
import GameCard from '../components/GameCard'
import GameDetail from '../screens/GameDetail'

export default function GameContainer(props) {
  const [games, setGames] = useState([])
  const history = useHistory()
  const { currentUser } = props
  // console.log(currentUser)

  useEffect(() => {
    const fetchGames = async () => {
      // if (currentUser) {
      //   const userGamesArray = await getAllUserGames()
      //   setGames(userGamesArray)
      // } else {
      const allGamesArray = await getAllGames()
      setGames(allGamesArray)
      // }
    }
    fetchGames()
  }, [])
  console.log(games)

  const handleDelete = async (id) => {
    await deleteGame(id)
    setGames((prevState) => prevState.filter((game) => game.id !== id))
  }

  return (
    <Switch>
      <Route path='/games/:id'>
        <GameDetail currentUser={currentUser} handleDelete={handleDelete} />
      </Route>

      <div>
        {games.map((game) => (
          <React.Fragment key={game.id}>
            <Link to={`/games/${game.id}`}>
              <p> {game.name}</p>
            </Link>
            {currentUser && currentUser.id === game.user_id && (
              <>
                <Link to={`/games/${game.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(game.id)}>Delete</button>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </Switch>
  )
}
