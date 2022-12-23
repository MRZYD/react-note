import React, { Component } from 'react'

class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} 
          value={this.props.value} 
          onChange={(e) => {
            this.props.onChangeEvent(e.target.value)
          }}/>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    return (
      <div>
        <Field label = '用户名' type="text" value={this.state.username} onChangeEvent={(value) => {
          this.setState({
            username: value
          })
        }}/>
        <Field label = '密码' type="password" value={this.state.password} onChangeEvent={(value) => {
          this.setState({
            password: value
          })
        }}/>
        <button onClick={() => {
          console.log(this.state.username, this.state.password)
        }}>登录</button>
        <button onClick={() => {
          console.log(134124)
          this.setState({
            username: '',
            password: ''
          })
        }}>取消</button>
      </div>
    )
  }
}
