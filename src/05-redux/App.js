import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import store from './redux/store'
console.log(store.getState())

export default class App extends Component {
  state = {
    isShow: store.getState().TabbarReducer.show
  }

  // store.subsribe 订阅
  componentDidMount() { 
    store.subscribe(() => {
      console.log('app 订阅', store.getState().TabbarReducer.show)
      this.setState({
        isShow: store.getState().TabbarReducer.show
      })
    })
  }

  render() {
    return (
      <div>
        <MRouter>
          {this.state.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    )
  }
}
