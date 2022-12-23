import React, { Component } from 'react'

class NavBar extends Component{
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.event()
        }}>click</button>
        <span>navbar</span>
      </div>
    )
  }
}

class Sidebar extends Component{
  render() {
    return (
      <div>
        <ul>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {
  state = {
    isShow: false
  }
  handleEvent = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    return (
      <div>
        <NavBar event={this.handleEvent}></NavBar>
        {this.state.isShow && <Sidebar></Sidebar>}
      </div>
    )
  }
}
