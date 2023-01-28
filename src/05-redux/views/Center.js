import React, { Component } from 'react'

export default class Center extends Component {
  render() {
    return (
      <div>
        Center
        <div onClick={()=> {
          console.log(this.props)
          this.props.history.push(`/filmsorder`)
        }}>电影订单</div>
      </div>
    )
  }
}
