import React from "react";
import Navbar from  "./Navbar/index"
import Sidebar from  "./Sidebar/index"

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>首页</h2>
          {/* 类组件 */}
          <Navbar title="首页" leftshow={false} rightshow={false}></Navbar>
          {/* 函数组件 */}
          <Sidebar bg='yellow' position='left'></Sidebar>
        </div>
      </div>
    )
  }

}

export default App;