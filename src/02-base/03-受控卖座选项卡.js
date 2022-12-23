// class Test {
//   constructor() {
//     this.a = 1;

import React from "react";
import './css/02-movie.css';
import Film from './maizuoComponent2/film';
import Cinema from "./maizuoComponent2/cinema";
import Center from "./maizuoComponent2/center";
import Tabbar from './maizuoComponent2/Tabbar'
import Navbar from "./maizuoComponent2/Navbar";

class App extends React.Component {
  state = {
    liIndex: 0,
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
        <Navbar myevent={() => {
          this.setState({
            liIndex: 2
          })
        }}></Navbar>
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
        <Tabbar myevent = {(index) => {
          this.setState({
            liIndex: index
          })
        }} liIndex = {this.state.liIndex}
        list = {this.state.list}></Tabbar>
      </div>
    )
  }
}

export default App;