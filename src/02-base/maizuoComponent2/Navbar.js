import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <button onClick={() => {
          this.goBack()
        }}>back</button>
        <span>卖座电影</span>
        <button onClick= {() => {
          this.props.myevent();
        }}>center</button>
      </div>
    )
  }
  goBack() {

  }
}
