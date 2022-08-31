import React from "react";


function Sidebar(props) {
  console.log(props)
  let obj1 = {
    left: 0,
  }
  let obj2 = {
    right: 0
  }

  let obj = {
    background: props.bg,
    width: '200px',
    position: 'fixed'
  }

  let styleobj = props.position == 'left' ? {...obj, ...obj1} : {...obj, ...obj2}
  return (
    <div style={styleobj}>
      Navbar
    </div>
  )

}

export default Sidebar;