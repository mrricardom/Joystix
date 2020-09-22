import React from 'react'
import Games from '../screens/Games'
import { Link } from 'react-router-dom'
import GameCard from '../components/GameCard'
import '../css/HomeScreen.css'

export default function HomeScreen(props) {
  const { games } = props

  console.log(games)

  return (
    <div className='arcade-container'>
      <h2 className='arcade-title'>Arcade</h2>
      <div className='arcade-games'>
        {games.map((game) => (
          <div className='oneGame' key={game.id}>
            <img className='mygame-img' src={game.img_url}></img>
            <Link className='games-link' to={`/games/${game.id}`}>
              <p> {game.name}</p>
            </Link>
            <p>{game.yr}</p>
            <p>{game.genre}</p>
          </div>
        ))}{' '}
      </div>
    </div>
  )
}
