import React from "react";


class App extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button onClick={()=> {
          console.log('add')
        }}>add</button>
        <button onClick={this.handleClick}>add</button>
        <button onClick={this.handleClick1}>add1</button>
        <button onClick={() => {
          this.handleClick2()
        }}>add2</button>

      </div>
    )
  }

  handleClick() {
    console.log('add')
  }

  handleClick1 = () => {
    console.log('add1')
  }

  handleClick2() {
    console.log('add2')
  }
}

class A {
  constructor() {
    this.a = '1111'
    this.b = '2222'
  }

  c = 333

  d = () => {

  }

  aaa() {
    console.log('aaa')
  }

  bbb() {

  }

}

console.log(new A())

export default App;