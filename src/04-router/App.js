import React, { Component } from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'

export default class App extends Component {
  render() {
    return (
      <div>
        其他内容
        <MRouter>
          <Tabbar></Tabbar>
        </MRouter>
      </div>
    )
  }
}
