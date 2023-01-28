import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Tabbar extends Component {
  state = {
    list: [{title:'电影', path: '/films', id: 1}, {title:'影院', path: '/cinemas',id: 2}, {title:'我的', path: '/center',id:3}]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map(item => 
              <li key={item.title}>
                <NavLink to={item.path} activeClassName='zyd'>
                  {item.title}
                </NavLink>
                <NavLink to={item.path + '/' +item.id} activeClassName='zyd'>
                  {item.title}
                </NavLink>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}
