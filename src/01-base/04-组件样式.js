import React from "react";
import './css/01-index.css';

class App extends React.Component {
  render() {
    const name = 'zyd'
    const obj = {
      background: 'yellow',
      fontSize: '30px'
    }
    return (
      <div> 
        {10 + 20} - {name} 
        {10 > 20 ? 'false' : 'true'}
        <div style={obj}>234124214</div>
        <div style={{backgroundColor: 'red'}}>2222222</div>
        <div className="active">333333333333333333</div>
        <label for="username">用户名：</label>
        <input type='text' id='username'></input>
      </div>
    )
  }

}

export default App;