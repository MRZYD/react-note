import React from "react";
import Navbar from  "./Navbar/index"

class App extends React.Component {
  render() {
    let obj = {
      title: '测试',
      leftshow: false,
    }
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" leftshow={false} rightshow={false}></Navbar>
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表" leftshow={true} rightshow={true}></Navbar>
        </div>
        <div>
          <h2>我的</h2>
          <Navbar title="我的" leftshow={true} rightshow={false}></Navbar>

          <Navbar title={obj.title} leftshow={obj.leftshow}></Navbar>
          <Navbar {...obj}></Navbar>

        </div>
      </div>
    )
  }

}

export default App;