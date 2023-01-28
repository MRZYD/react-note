import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return ( 
      <div>
        <MRouter>
          {this.props.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isShow: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)
