import React, { Component } from 'react'

export default class App extends Component {
  state = {
    list: [{name:1, poster: 'www.baidu.com', content: '12342143243214321'},
      {name:2, poster: 'www.baidu.com', content: '123421443254325342'},
      {name:3, poster: 'www.baidu.com', content: 'dsfadfsafsafsafsafsd' }],
    info: ''
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => 
            <Fileitem key={index} {...item} 
            onEvent={(value) => {
              this.setState({
                info: value
              })
            }}></Fileitem>
          )
        }

        <FileDetail info={this.state.info}></FileDetail>
      </div>
    )
  }
}

class Fileitem extends Component {
  render() {
    let {name, poster, content} = this.props;
    return (
      <div>
        <img src={poster}></img>
        <h4 onClick={() => {
          this.props.onEvent(content)
        }}>{name}</h4>
      </div>
    )
  }
}

class FileDetail extends Component {
  render() {
    return (
      <div>
        {this.props.info}
      </div>
    )
  }
}