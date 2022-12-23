import React, { Component } from "react";

class Child extends Component{
  render() {
    return <div>
      Child-{this.props.text}
      <button onClick={() => {
          this.props.text = '333333'
        }}>click-子</button>
    </div>
  }
}

class App extends React.Component {
  state = {
    text: '1111'
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            text: '2222'
          })
        }}>click-父</button>
        <Child text={this.state.text}/>
      </div>
    )
  }

}

export default App;