import React from "react";


class App extends React.Component {
  state = {
    list: [{
      id: 1,
      text: '电影'
    },{
      id: 2,
      text: '影院'
    },{
      id: 3,
      text: '我的'
    },],
    liIndex: this.props.defaultValue
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index) => 
              <li key={item.id} 
                className={this.state.liIndex === index ? 'active' : ''}
                onClick={() => {this.tabClick(index)}}>{item.text}</li>
            )
          }
        </ul>
      </div>
    )
  }
  tabClick(index){
    this.setState({
      liIndex: index
    })
    this.props.myevent(index);
  }
}

export default App;