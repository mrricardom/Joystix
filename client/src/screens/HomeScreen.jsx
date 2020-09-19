import React from 'react'
import Games from '../screens/Games'
import { Link } from 'react-router-dom'

export default function HomeScreen(props) {
  const { games } = props

  console.log(games)

  return (
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
  )
}
