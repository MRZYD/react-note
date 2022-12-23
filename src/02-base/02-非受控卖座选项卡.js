// class Test {
//   constructor() {
//     this.a = 1;

import React from "react";
import './css/02-movie.css';
import Film from './maizuoComponent/film';
import Cinema from "./maizuoComponent/cinema";
import Center from "./maizuoComponent/center";
import Tabbar from './maizuoComponent/Tabbar'
import Navbar from "./maizuoComponent/Navbar";

class App extends React.Component {
  state = {
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
        <Navbar myevent={() => {
          console.log(111)
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
        }} defaultValue = {this.state.liIndex}></Tabbar>
      </div>
    )
  }
}

export default App;