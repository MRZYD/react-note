import React from "react";
import propTypes from 'prop-types'

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

//属性校验
Sidebar.propTypes = {
  bg: propTypes.string,
}

//默认值
Sidebar.defaultProps = {
  bg: 'red',
}

export default Sidebar;