import React from "react";


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text: '收藏',
      show: true,
      name: 'mrzyd'
    }
  }
  // state = {
  //   text: '收藏',
  //   show: true
  // }
  render() {
    // var text = '收藏'

    return (
      <div>
        <h1>欢迎来到react开发 -- {this.state.name}</h1>
        <button onClick={() =>{
          this.setState({
            show: !this.state.show,
            name: 'xiaoming'
          })
          if(this.state.show){
            console.log('收藏')
          }else{
            console.log('取消收藏')
          }
        }}>{this.state.show ? '收藏' : '取消收藏'}</button>
      </div>
    )
  }
}

export default App;