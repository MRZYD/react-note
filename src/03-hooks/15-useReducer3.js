import React, { Component, useContext, useEffect, useReducer, useState } from 'react'

const GlobalContext = React.createContext() //创建context对象

const reducer = (oldState, actions) => {
  let newState = {...oldState}
  switch(actions.type){
    case 'list':
      newState.filmList = actions.value
      return newState
    case 'content': 
      newState.info = actions.value
      return newState
    default: 
      return oldState
  }
}

const intialState = ({
  filmList: [],
  info: ''
})

export default function App() {
  // const [filmList, setfilmList] = useState([])
  // const [info, setinfo] = useState('')

  const [state, dispatch] = useReducer(reducer, intialState)

  useEffect(() => {
    let list = [{name:1, poster: 'www.baidu.com', content: '12342143243214321'},
    {name:2, poster: 'www.baidu.com', content: '123421443254325342'},
    {name:3, poster: 'www.baidu.com', content: 'dsfadfsafsafsafsafsd' }]
    
    dispatch({
      type: 'list',
      value: list
    })
  }, [])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        {
          state.filmList.map((item, index) => 
            <Fileitem key={index} {...item}></Fileitem>
          )
        }

        <FileDetail></FileDetail>
      </div>
    </GlobalContext.Provider>
  )
}


function Fileitem (props) {
  let {name, poster, content} = props;
  const {dispatch} = useContext(GlobalContext)
  return(
    <div>
      <img src={poster}></img>
      <h4 onClick={() => {
        dispatch({
          type: 'content',
          value: content
        })
        // value.changeInfo(content)
      }}>{name}</h4>
    </div>
  )
     
  
}

function FileDetail () {
  const {state} = useContext(GlobalContext)
  return(
    <div>
      11{state.info}
    </div>
  )
       
}
