import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState("mrzyd")
  const [age, setAge] = useState(100)
  return (
    <div>
      <button onClick={() => {
        setName('xiaoming')
        setAge(18)
      }}>click</button>
      app-{name}-{age}
    </div>
  )
}
