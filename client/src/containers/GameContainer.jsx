import React from 'react'

export default function GameContainer(props) {
  return (
    <div>
      {props.currentUser && <h1>Hey you!</h1>}
      <h1>Home test</h1>
    </div>
  )
}
