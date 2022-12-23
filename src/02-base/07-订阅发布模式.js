import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        app
      </div>
    )
  }
}


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

// 订阅者 (多个订阅)
bus.subscribe((value) => {
  console.log('111', value)
})

bus.subscribe((value) => {
  console.log('222', value)
})

//发布者
bus.publish('标题')