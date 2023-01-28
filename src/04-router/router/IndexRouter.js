import React, { Component } from 'react'
// HashRouter  BrowserRouter
// BrowserRouter 没有#的路径，好看，真正朝后端发请求要页面，后端没有对应的路径处理路径，就会404，不好看
// HashRouter 有#的路径，但是前端渲染，通锚点去跳转
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'

function isAuth() {
  return localStorage.getItem("token")
}

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          {this.props.children}
          <Switch>
            <Route path="/films" component={Films}></Route>
            <Route path="/cinemas" component={Cinemas}></Route>
            {/* <Route path="/center" component={Center}></Route> */}
            <Route path="/center" render={(props) => {
              return isAuth() ? <Center {...props}/> : <Redirect to="/login"></Redirect>
            }}></Route>
            <Route path="/login" component={Login}></Route>
            {/* 动态路由传参 */}
            {/* <Route path="/detail/:id" component={Detail}></Route> */}

            <Route path="/detail" component={Detail}></Route>

            {/* {模糊匹配} */}
            <Redirect from="/" to="/films" exact></Redirect>
            {/* {精确匹配 exact} */}
            <Route component={NotFound}></Route>
          </Switch>
          
        </Router>
      </div>
    )
  }
}

// class Route extends Component{

//   render(){
//     let MyComponent = this.props.component
//     return(
//       <div>
//         <MyComponent history={} match={}></MyComponent>
//       </div>
//     )
//   }
// }