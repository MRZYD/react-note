// class Test {
//   constructor() {
//     this.a = 1;

import React from "react";
import './css/02-movie.css';
import Film from './maizuoComponent/film';
import Cinema from "./maizuoComponent/cinema";
import Center from "./maizuoComponent/center";


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
    liIndex: 0
  }

  funcWhich(index){
    switch (index) {
      case 0:
        return <Film></Film>
      case 1:
        return <Cinema></Cinema>
      case 2:
        return <Center></Center>
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        {/* {
          this.state.liIndex == 0 && <Film></Film>
        }
        {
          this.state.liIndex == 1 && <Cinema></Cinema>
        }
        {
          this.state.liIndex == 2 && <Center></Center>
        } */}
        {
          this.funcWhich(this.state.liIndex)
        }
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
  }
}

export default App;