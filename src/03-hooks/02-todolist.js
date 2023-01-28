import React, { useState } from 'react'

export default function App() {
  const [text, settext] = useState("")
  const [list, setlist] = useState(['aa', 'bb', 'cc'])

  const handleChange = (evt) => {
    settext(evt.target.value)   
  }

  const handleAdd = () => {
    setlist([...list, text])
    settext('')
  }

  const handleDel = (idx) => {
    let newList = [...list]
    newList.splice(idx, 1)
    setlist(newList)
  }

  return (
    <div>
      <input onChange={handleChange} value={text}/> 
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
