import React from "react";


class App extends React.Component {
  state = {
    list: [{id: 1, name: 'aaa'},{id: 2, name: 'bbb'},{id: 3, name: 'ccc'},{id: 4, name: 'bbb'}]
  }
  myref = React.createRef()
  render() {
    return (
      <div>
        {/* <input ref="mytext"/> */}
        <input ref={this.myref}/>
        <button onClick={() => {
          this.handleClick()
        }}>add</button>
        
        <ul >
          {
            this.state.list.map((item, index)=>
            <li key={item.id}>
              {item.name}
              <button onClick={() => {this.handleDel(index)}}>del</button>
            </li>)
          }
        </ul>

        {/* {this.state.list.length == 0 ?  <div>暂无数据</div> : null} */}

        { this.state.list.length == 0 && <div>暂无数据</div>}
       
      </div>
    )
  }

  handleClick() {
    console.log('add', this.myref.current.value)
    let list = [...this.state.list]
    list.push({
      id: Math.random()*1000000000,  //生成不同id
      name: this.myref.current.value
    })
    this.setState({
      list: list
    })
    this.myref.current.value = ''
  }

  handleDel(index){
    console.log(index)
    let list = this.state.list.slice()
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}

// 原生js -- map
var list = ['aa', 'bb', 'cc']
var newlist = list.map(item=>`<li>${item}</li>`)
console.log(newlist)

export default App;