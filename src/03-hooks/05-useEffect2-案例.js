import React, { useEffect, useState } from 'react'

export default function App() {
  const [type, setType] = useState(1)
  return (
    <div>
      <ul>
        <li onClick={() => {
          setType(1)
        }}>正在热映</li>
        <li onClick={() => {
          setType(2)
        }}>即将上映</li>
      </ul>
      <FileList type={type}></FileList>
    </div>
  )
}

function FileList(porps){
  const [list, setlist] = useState([])
  useEffect(() => {
    if(porps.type === 1){
      setlist([1,2])
    }else{
      setlist([3,4])
    }
  }, [porps.type])

  return(
    <ul>
      {
        list.map(item => 
          <li key={item}>{item}</li>
        )
      }
    </ul>
  )
}