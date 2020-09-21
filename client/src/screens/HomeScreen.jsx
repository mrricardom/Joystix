import React from 'react'
import Games from '../screens/Games'
import { Link } from 'react-router-dom'
import GameCard from '../components/GameCard'
import '../css/HomeScreen.css'

export default function HomeScreen(props) {
  const { games } = props

  console.log(games)

  return (
    <div>
      <h2 className='arcade-title'>Arcade</h2>
      {games.map((game) => (
        <React.Fragment key={game.id}>
          <img src={game.img_url}></img>
          <Link to={`/games/${game.id}`}>
            <p> {game.name}</p>
          </Link>
          <p>{game.yr}</p>
          <p>{game.genre}</p>
        </React.Fragment>
      ))}
    </div>
  )
}
