import React, { useState } from 'react'

const Ref = (props) => {
  const [toggle, setToggle] = useState(false);
  function popup(e) {
    setToggle(!toggle);
  }
  return (
    <div onMouseEnter={popup} onMouseLeave={popup} style={{display:"inline"}} key={props.ref_number}>
      {toggle && <dialog style={{zIndex:"1", backgroundColor:"white"}} open>{props.context}</dialog>}
      <a href={`#${props.id}`} style={{display:"inline", textDecoration:"None"}}>[{props.id}]</a>
    </div>
  )
}

export default Ref
