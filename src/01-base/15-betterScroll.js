import React from "react";
import BettterScroll from '@better-scroll/core'


class App extends React.Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <div className="">
          <button onClick={() => {
            this.addClick()
          }}>btn</button>
        </div>
        <div className="kerwinwrapper" style={{height: '200px',background: 'yellow', overflow: 'auto'}} >
          <ul className="kerwincontent">
            {
              this.state.list.map(item => 
                <li key={item}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }

  addClick() {
    var list = [1,2,3,4,5,6,7,8,9,0,11,21,33,34,55,66,778,88]
    this.setState({
      list: list
    },() => {
      new BettterScroll('.kerwinwrapper')
    })

  }

}

export default App;