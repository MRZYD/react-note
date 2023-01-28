import React, {useState} from 'react'
import store from '../redux/store'

export default function City(props) {
  let array = ['北京','上海','深圳','广州']
  const [list] = useState(array)
  return (
    <div>
      <ul>
        {
          list.map(item => 
            <li key={item} onClick={() => {
              store.dispatch({
                type: 'change-city',
                payload: item
              })
              props.history.goBack()
            }}>{item}</li>
          )
        }
      </ul>
    </div>
  )
}
