import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneGame } from '../services/games'
import GameCard from '../components/GameCard'
import Comments from '../components/Comments'

export default function GameDetail(props) {
  const [game, setGame] = useState([])
  const { id } = useParams()
  const {
    handleDelete,
    currentUser,
    updateSubmit,
    confirmDelete,
    isDelete,
    isToggled,
  } = props

  useEffect(() => {
    const fetchGame = async () => {
      const singleGame = await getOneGame(id)
      setGame(singleGame)
    }
    fetchGame()
  }, [])

  return (
    <>
      <GameCard
        game={game}
        currentUser={currentUser}
        handleDelete={handleDelete}
        isDelete={isDelete}
        isToggled={isToggled}
        confirmDelete={confirmDelete}
      />
      <Comments id={id} currentUser={currentUser} />
    </>
  )
}
