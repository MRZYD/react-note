import React, { useContext, useReducer } from 'react'

const GlobalContext = React.createContext();

const reducer = (oldState, actions) => {
  let newState = {...oldState}
  switch(actions.type){
    case 'A':
      newState.a = actions.value
      return newState
    case 'B':
      newState.b = actions.value
      return newState
    default: 
      return oldState
  }
}

const intialState = ({
  a: '1111111',
  b: '1111111'
})

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const {dispatch} = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'A',
          value: '22222'
        })
      }}>改变Child2</button>
      <button onClick={() => {
        dispatch({
          type: 'B',
          value: '33333'
        })
      }}>改变Child3</button>
    </div>
  )
}

function Child2() {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      Child2 - {state.a}
    </div>
  )
}

function Child3() {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      Child3 - {state.b}
    </div>
  )
}