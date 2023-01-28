import React, { useEffect } from 'react'
import store from '../redux/store'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'

// export default class Detail extends Component {
//   render() {
//     return (
//       <div>Detail  {console.log(this.props.location)}</div>
//     )
//   }
// }

export default function Detail(props){
  useEffect(() => {
    console.log('create')
    store.dispatch(hide())
    return() => {
      console.log("destory")
      store.dispatch(show())
    }
  },[])
  return (
    <div>Detail  {console.log(props.location)}</div>
  )
}
