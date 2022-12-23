import React, { Component } from 'react'

var bus = {
  list: [],

  //订阅
  subscribe(callback) {
    console.log(callback)
    this.list.push(callback)
  },

  //发布
  publish(text) {
    //遍历所有的list，将回调函数执行
    this.list.map(callback => {
      callback && callback(text)
    })
  }
}

export default class App extends Component {
  state = {
    list: [{name:1, poster: 'www.baidu.com', content: '12342143243214321'},
      {name:2, poster: 'www.baidu.com', content: '123421443254325342'},
      {name:3, poster: 'www.baidu.com', content: 'dsfadfsafsafsafsafsd' }],
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => 
            <Fileitem key={index} {...item} ></Fileitem>
          )
        }

        <FileDetail></FileDetail>
      </div>
    )
  }
}

class Fileitem extends Component {
  render() {
    let {name, poster, content} = this.props;
    return (
      <div>
        <img src={poster}></img>
        <h4 onClick={() => {
          bus.publish(content)
        }}>{name}</h4>
      </div>
    )
  }
}

class FileDetail extends Component {
  constructor() {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe((value) => {
      console.log(value)
      this.setState({
        info: value
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.info}
      </div>
    )
  }
}