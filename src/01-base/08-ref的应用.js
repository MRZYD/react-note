import React from "react";


class App extends React.Component {
  myref = React.createRef()
  render() {
    return (
      <div>
        {/* <input ref="mytext"/> */}
        <input ref={this.myref}/>
        <button onClick={() => {
          this.handleClick()
        }}>add</button>

      </div>
    )
  }

  handleClick() {
    // console.log('add2',this.refs.mytext.value)
    console.log('add', this.myref.current.value)
  }

}

export default App;