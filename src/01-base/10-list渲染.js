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
            this.state.list.map(item=>
            <li key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }

  handleClick() {
    // console.log('add2',this.refs.mytext.value)
    console.log('add', this.myref.current.value)
  }
}

// 原生js -- map
var list = ['aa', 'bb', 'cc']
var newlist = list.map(item=>`<li>${item}</li>`)
console.log(newlist)

export default App;