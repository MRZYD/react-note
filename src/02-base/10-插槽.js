import React, { Component } from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        Child
        {this.props.children}
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <div>1111</div>
          <div>2222</div>
          <div>3333</div>
        </Child>
      </div>
    )
  }
}
