import React from "react";

class App extends React.Component {
  state = {
    num: 0
  }
  render() {
    return (
      <div>
        {this.state.num}
        <button onClick={this.numClick}>add</button>
        <button onClick={this.numClick2}>add2</button>
      </div>
    )
  }

  numClick=()=> {
    this.setState({
      num: this.state.num + 1
    })

    console.log(this.state.num)

    this.setState({
      num: this.state.num + 1
    })

    console.log(this.state.num)

    this.setState({
      num: this.state.num + 1
    }, () => {
      console.log(this.state.num)
    })

  }
 
  numClick2=()=> {
    setTimeout(() => {
      this.setState({
        num: this.state.num + 1
      })
  
      console.log(this.state.num)
  
      this.setState({
        num: this.state.num + 1
      })
  
      console.log(this.state.num)
  
      this.setState({
        num: this.state.num + 1
      })
  
      console.log(this.state.num)
    },10)
  }
}

// setState 处在同步的逻辑中， 异步更新状态，更新真实dom

// setState 处在异步的逻辑中， 同步更新状态，同步更新真实dom

// setState 接收第二个参数， 第二个参数是回调函数，状态和dom更新完之后就会被触发

// 宏任务 react18 都是异步   react17 区分异步和同步

export default App;