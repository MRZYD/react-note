import React, { useCallback, useState } from 'react'

export default function App() {
  const [myname, setmyname] = useState('zyd')
  const [text, settext] = useState("")
  const [list, setlist] = useState(['aa', 'bb', 'cc'])

  const handleChange = useCallback((evt) => {
    settext(evt.target.value)   
  }, [])

  const handleAdd = useCallback(() => {
    setlist([...list, text])
    settext('')
  }, [text,list])

  const handleDel = useCallback((idx) => {
    let newList = [...list]
    newList.splice(idx, 1)
    setlist(newList)
  }, [list])

  return (
    <div>
      {myname} - <button onClick={() => {
        setmyname('xiaoming')
      }}>changName</button>
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
