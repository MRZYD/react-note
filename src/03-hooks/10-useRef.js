import React, { useRef, useState } from 'react'

export default function App() {
  const mytext = useRef()   //React.createRef()
  // const [text, settext] = useState("")
  const [list, setlist] = useState(['aa', 'bb', 'cc'])

  const handleAdd = () => {
    console.log(mytext.current.value)
    setlist([...list, mytext.current.value])
    // settext('')
    mytext.current.value = ''
  }

  const handleDel = (idx) => {
    let newList = [...list]
    newList.splice(idx, 1)
    setlist(newList)
  }

  return (
    <div>
      <input ref={mytext}/> 
      <button onClick={handleAdd}>add</button>
      <ul>
        {
          list.map((item, index) => 
            <li key={item}>
              {item}
              <button onClick={() => {handleDel(index)}}>del</button>
            </li>
          )
        }
      </ul>
      {
        !list.length && <div >暂无数据</div> 
      }
    </div>
  )
}
