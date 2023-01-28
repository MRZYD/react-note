import React, { Component, useContext, useEffect, useState } from 'react'

const GlobalContext = React.createContext() //创建context对象

export default function App() {
  const [filmList, setfilmList] = useState([])
  const [info, setinfo] = useState('')

  useEffect(() => {
    let list = [{name:1, poster: 'www.baidu.com', content: '12342143243214321'},
    {name:2, poster: 'www.baidu.com', content: '123421443254325342'},
    {name:3, poster: 'www.baidu.com', content: 'dsfadfsafsafsafsafsd' }]
    setfilmList(list)
  }, [])

  return (
    <GlobalContext.Provider value={{
      call: '打电话',
      sms: '短信',
      info: info,
      changeInfo: (value) => {
        setinfo(value)
      }
    }}>
      <div>
        {
          filmList.map((item, index) => 
            <Fileitem key={index} {...item}></Fileitem>
          )
        }

        <FileDetail></FileDetail>
      </div>
    </GlobalContext.Provider>
  )
}


function Fileitem (props) {
  let {name, poster, content} = props;
  const value = useContext(GlobalContext)
  return(
    <div>
      <img src={poster}></img>
      <h4 onClick={() => {
        value.changeInfo(content)
      }}>{name}</h4>
    </div>
  )
     
  
}

function FileDetail () {
  const value = useContext(GlobalContext)
  return(
    <div>
      11{value.info}
    </div>
  )
       
}
