import React, { Component } from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'

export default class Films extends Component {
  render() {
    return (
      <div>
        <div>轮播</div>
        <div>
           导航栏
        </div>
        <Switch>
          <Route path="/films/nowplaying" component={Nowplaying}></Route>
          <Route path="/films/comingsoon" component={Comingsoon}></Route>

          <Redirect from='/films' to="/films/nowplaying"></Redirect>
        </Switch>
        
      </div>
    )
  }
}
