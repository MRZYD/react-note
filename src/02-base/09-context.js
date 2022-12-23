import React, { Component } from 'react'

const GlobalContext = React.createContext() //创建context对象

export default class App extends Component {
  state = {
    list: [{name:1, poster: 'www.baidu.com', content: '12342143243214321'},
      {name:2, poster: 'www.baidu.com', content: '123421443254325342'},
      {name:3, poster: 'www.baidu.com', content: 'dsfadfsafsafsafsafsd' }],
    info: ''
  }
  render() {
    return (
      <GlobalContext.Provider value={{
        call: '打电话',
        sms: '短信',
        info: this.state.info,
        changeInfo: (value) => {
          this.setState({
            info:value
          })
        }
      }}>
        <div>
          {
            this.state.list.map((item, index) => 
              <Fileitem key={index} {...item}></Fileitem>
            )
          }

          <FileDetail></FileDetail>
        </div>
      </GlobalContext.Provider>
    )
  }
}

class Fileitem extends Component {
  render() {
    let {name, poster, content} = this.props;
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return(
            <div>
              <img src={poster}></img>
              <h4 onClick={() => {
                value.changeInfo(content)
              }}>{name}</h4>
            </div>
          )
        }}
      </GlobalContext.Consumer>
    )
  }
}

class FileDetail extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return(
              <div>
                11{value.info}
              </div>
            )
          }
        }
      </GlobalContext.Consumer>
    )
  }
}