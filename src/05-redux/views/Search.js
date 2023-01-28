import React, { Component, useEffect, useState, useMemo } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

export default function Search() {
  const [cityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
  const [mytext, setmytext] = useState('')
  
  useEffect(() => {
    if(store.getState().CinemaListReducer.list.length === 0){
      store.dispatch(getCinemaListAction())
    }else{

    }
    let unsubscribe = store.subscribe(() => {
      setCinemaList(store.getState().CinemaListReducer.list)
    })

    return () => {
      // 取消订阅
      unsubscribe()
    }
  }, [])
  const getCinemaList = useMemo(() => 
    cinemaList.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()))
  ,[cinemaList, mytext])
  return (
    <div>
      <input value={mytext} onChange={(evt) => {
        setmytext(evt.target.value)
      }}></input>
      <ul>
        {
          getCinemaList.map(item => 
            <li key={item.cinemaId}>{item.name}</li>
          )
        }
      </ul>
    </div>
  )
}
