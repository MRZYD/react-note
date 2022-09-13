import React from "react";
import propTypes from 'prop-types'

class App extends React.Component {
  state = {
    //只能内部自己使用，外部不可以使用
  }

  //属性是父组件传子组件的参数，通过this.props传参
  render() {
    return (
      <div>
        {this.props.leftshow && <button>返回</button>}
        {this.props.title}-
        Navbar
        {this.props.rightshow && <button>home</button>}
      </div>
    )
  }

}

App.propTypes = {
  title: propTypes.string,
  leftshow: propTypes.bool,
}

export default App;