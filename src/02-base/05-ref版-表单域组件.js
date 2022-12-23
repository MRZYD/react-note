import React, { Component } from 'react'

class Field extends Component {
  state = {
    value: ''
  }
  clear() {
    this.setState({
      value: ''
    })
  }
  setStateValue(val) {
    this.setState({
      value: val
    })
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type={this.props.type} 
          value={this.state.value} 
          onChange={(e) => {
            this.setState({
              value: e.target.value
            })
          }}/>
      </div>
    )
  }
}

export default class App extends Component {
  username = React.createRef()
  password = React.createRef()

  render() {
    return (
      <div>
        <Field label = '用户名' type="text" ref={this.username}/>
        <Field label = '密码' type="password" ref={this.password}/>
        <button onClick={() => {
          console.log(this.username.current.state.value, this.password.current.state.value)
        }}>登录</button>
        <button onClick={() => {
          this.username.current.clear()
          this.password.current.clear()
        }}>取消</button>
        <button onClick={() => {
          this.username.current.setStateValue('zyd')
          this.password.current.setStateValue('123')
        }}>历史记录</button>
      </div>
    )
  }
}
