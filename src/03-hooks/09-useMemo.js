import React, { useEffect, useState, useMemo } from "react";

export default function Cinema() {
  const [mytext, setmytext] = useState('')
  const [cinemaList, setcinemaList] = useState([])

  useEffect(() => {
    setcinemaList(['aa','bb','cc','ac','bc','ab'])
  },[])

  const getCinemaList = useMemo(() => 
     cinemaList.filter(item => item.toUpperCase().includes(mytext.toUpperCase()))
  ,[cinemaList, mytext])

  return(
    <div>
      <input value={mytext} onChange={(evt) => {
        setmytext(evt.target.value)
      }}></input>
      {
        getCinemaList.map(item => 
          <dl key={item}>
            <dt>{item}</dt>
          </dl>
        )
      }
    </div>
  )
}

 
