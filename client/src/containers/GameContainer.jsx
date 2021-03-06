import React, { useState, useEffect } from 'react'
import { Link, Switch, Route, useHistory } from 'react-router-dom'
import {
  getAllGames,
  getAllUserGames,
  putGame,
  postGame,
  deleteGame,
} from '../services/games'
import GameCard from '../components/GameCard'
import GameDetail from '../screens/GameDetail'
import GameCreate from '../screens/GameCreate'
import GameEdit from '../screens/GameEdit'
import HomeScreen from '../screens/HomeScreen'
import Games from '../screens/Games'

export default function GameContainer(props) {
  const [games, setGames] = useState([])
  const history = useHistory()
  const { currentUser } = props

  useEffect(() => {
    const fetchGames = async () => {
      const allGamesArray = await getAllGames()
      setGames(allGamesArray)
    }
    fetchGames()
  }, [])
  console.log(games)

  const updateSubmit = async (id, formData) => {
    const updatedGame = await putGame(id, formData)
    setGames((prevState) =>
      prevState.map((game) => (game.id === Number(id) ? updatedGame : game))
    )
  }

  const createSubmit = async (formData) => {
    const newGame = await postGame(formData)
    setGames((prevState) => [...prevState, newGame])
    history.push('/mygames')
  }

  const handleDelete = async (id) => {
    await deleteGame(id)
    setGames((prevState) => prevState.filter((game) => game.id !== id))
  }

  return (
    <Switch>
      <Route path='/games/new'>
        <GameCreate createSubmit={createSubmit} />
      </Route>
      <Route path='/games/:id/edit'>
        <GameEdit games={games} updateSubmit={updateSubmit} />
      </Route>
      <Route path='/games/:id'>
        <GameDetail
          currentUser={currentUser}
          updateSubmit={updateSubmit}
          handleDelete={handleDelete}
          games={games}
        />
      </Route>
      <Route path='/mygames'>
        <Games
          games={games}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/'>
        <HomeScreen games={games} />
      </Route>
    </Switch>
  )
}
