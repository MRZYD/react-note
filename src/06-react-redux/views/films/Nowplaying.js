import React, { Component } from 'react'
import {withRouter} from 'react-router'

export default class Nowplaying extends Component {
  state = {
    list: [{title:'电影', path: '/films', id: 1}, {title:'影院', path: '/cinemas',id: 2}, {title:'我的', path: '/center',id:3}]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map(item => 
              // <FilmItem key={item.id} {...item} {...this.props}></FilmItem>
              <WithFileItem key={item.id} {...item}></WithFileItem>

            )
          }
        </ul>
      </div>
    )
  }
}

class FilmItem extends Component {
  render() {
    let item = this.props
    return (
      <li onClick={() => {
        console.log(this.props)
        // 1 动态路由传参
        // this.props.history.push(`/detail/${id}`)

        // 2 query传参
        // this.props.history.push({
        //   pathname: '/detail',
        //   query: {
        //     id: item.id
        //   }
        // })

        //3 state传参
        item.history.push({
          pathname: '/detail',
          state: {
            id: item.id
          }
        })
      }}>
          {item.title}
      </li>
    )
  }
}


const WithFileItem = withRouter(FilmItem)