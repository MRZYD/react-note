import React, { Component } from "react";

class App extends React.Component {
  myusername = React.createRef()
  state = {
    username: 'zyd'
  }
  render() {
    return (
      <div>
        <h1>登录</h1>
        <input type='text' ref={this.myusername} value={this.state.username} onChange={(e)=>{
          console.log('change')
          this.setState({
            username: e.target.value
          })
        }}></input>
        <button onClick={() => {
          console.log(this.state.username)
        }}>登录</button>
        <button onClick={() => {
          this.setState({
            username: ''
          })
        }}>重置</button>
      </div>
    )
  }

}

export default App;