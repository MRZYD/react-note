import { calculateNewValue } from "@testing-library/user-event/dist/utils";
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

  handleClick1 = (evt) => {
    console.log('add1', this.a, evt)
  }

  handleClick2() {
    console.log('add2', this.a)
  }
}

// React 并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式

// call， 改变this， 自动执行函数
// apply，改变this， 自动执行函数
// bind， 改变this， 不会自动执行函数，手动加括号执行函数

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