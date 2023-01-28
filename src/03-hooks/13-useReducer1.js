import React, { useReducer } from 'react'

const reducer = (oldState, actions) => {
  let newState = {...oldState}
  switch(actions.type){
    case 'del':
      newState.count--
      return newState
    case 'add':
      newState.count++
      return newState
    default:
      return oldState
  }
}

const intialState = {
  count: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'del'
        })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: 'add'
        })
      }}>+</button>
    </div>
  )
}
