import React, { useEffect, useState } from 'react'
import { get_dict } from './GlobalVar'

const Ref = (props) => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(false);
  function popup(e) { setToggle(!toggle); }

  var id = props.id
  var content = get_dict(id)
  useEffect(() => {
    if (!content) { setError(true) }
  })
  
  return (
    <div onMouseEnter={popup} onMouseLeave={popup} style={{display:"inline"}} key={id}>
      {!error && toggle && <dialog style={{zIndex:"1", backgroundColor:"white"}} open>{content}</dialog>}
      {!error && <a href={`#${id}`} style={{display:"inline", textDecoration:"None"}}>[{id}]</a>}
      {error && <label style={{display:"inline", color:"red"}}>[{id}]</label>}
    </div>
  )
}

export default Ref