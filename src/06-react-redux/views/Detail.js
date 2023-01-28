import React, { useEffect } from 'react'
import store from '../redux/store'
import {show, hide} from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'

// export default class Detail extends Component {
//   render() {
//     return (
//       <div>Detail  {console.log(this.props.location)}</div>
//     )
//   }
// }

function Detail(props){
  let {hide, show, match} = props
  console.log( )
  useEffect(() => {
    console.log('create')
    hide()
    return() => {
      console.log("destory")
      show()
    }
  },[match.params.myid,show,hide])
  return (
    <div>Detail  {console.log(props.location)}</div>
  )
}

//connect (将来给孩子传的属性，将来给孩子传的回调函数)
const mapDispatchToProps = {
  show,
  hide
}
export default connect(null,mapDispatchToProps)(Detail)
