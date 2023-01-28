import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div>Detail  {console.log(this.props.location)}</div>
    )
  }
}
