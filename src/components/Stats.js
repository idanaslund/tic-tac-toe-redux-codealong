import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Stats = () => {
  const dispatch = useDispatch()
  // Gets the 'winner' from the game reducer
  const winner = useSelector((store) => store.game.winner)
  // Gets the 'nextPlayer' from the game reducer
  const nextPlayer = useSelector((store) => store.game.player)

  const handleButtonPress = () => {
    // Dispatches the restart action
    dispatch(game.actions.restart())
  }

  if (winner) {
    return (
      <div className="stats">
        <p>
          <Player value={winner} /> wins!!!!
        </p>
        <button type="button" onClick={handleButtonPress}>Start new game</button>
      </div>
    )
  }

  return (
    <div className="stats">
      <p>
        Next player <Player value={nextPlayer} />
      </p>
      <button type="button" onClick={handleButtonPress}>Restart</button>
    </div>
  )
}
