import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <input type="text"></input>
        <button onClick={() => {
          localStorage.setItem("token", '12312431')
          this.props.history.push(`/center`)
        }}>登录</button>
      </div>
    )
  }
}
