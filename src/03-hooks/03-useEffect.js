import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

export default function App() {
  const [ list, setlist ] = useState([])

  useEffect(() => {
    const array = ['11','22', '33']
    setlist(array)
  }, [])
  // 传空数组

  return (
    <div>
      <ul>
        {
          list.map((item, index) => 
            <li key={item}>
              {item}
            </li>
          )
        }
      </ul>
    </div>
  )
}