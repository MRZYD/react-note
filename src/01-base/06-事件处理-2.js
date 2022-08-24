import React from "react";


class App extends React.Component {
  a = 1111
  render() {
    return (
      <div>
        <input />
        <button onClick={()=> {
          console.log('add', this.a)
        }}>add</button>
        <button onClick={this.handleClick.bind(this)}>add</button>
        <button onClick={this.handleClick1}>add1</button>
        <button onClick={() => {
          this.handleClick2()
        }}>add2</button>

      </div>
    )
  }

  handleClick() {
    console.log('add',this.a)
  }

  handleClick1 = () => {
    console.log('add1', this.a)
  }

  handleClick2() {
    console.log('add2', this.a)
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