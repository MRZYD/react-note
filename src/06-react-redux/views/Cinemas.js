import React, { Component, useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

// export default class Cinemas extends Component {
//   state = {
//     cityName: store.getState().CityReducer.cityName
//   }
//   render() {
//     return (
//       <div>
//         <div onClick={() => {
//           this.props.history.push(`/city`)
//         }}>{this.state.cityName}</div>
//         Cinemas
//       </div>
//     )
//   }
// }

export default function Cinemas(props) {
  const [cityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

  
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

  return (
    <div>
      <div style={{overflow:"hidden"}}>
        <div onClick={() => {
          props.history.push(`/city`)
        }} style={{float:"left"}}>{cityName}</div>
        <div onClick={() => {
          props.history.push('/cinemas/search')
        }} style={{float:"right"}}>搜索</div>
      </div>
      <ul>
        {
          cinemaList.map(item => 
            <li key={item.cinemaId}>{item.name}</li>
          )
        }
      </ul>
    </div>
  )
}
