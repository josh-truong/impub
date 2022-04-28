import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

/**
 * Ref component - retrieves definition of a declared MathTerm component
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.id - Unique MathTerm id
 * 
 * @requires MathTermSkeleton
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Ref id="id"/>
*/
const Ref = (props) => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState(false);
  function popup(e) { setToggle(!toggle); }

  const term_name = Object.keys(props.id)[0]
  const term_id = props.id[term_name]
  const def = useSelector((state) => {
    try {
      return state.DefReducer[term_name][term_id]
    } catch (err) { return null }
  })

  useEffect(() => {
    if (def === undefined) { setError(true) }
    else { setError(false) }
  })
  
  return (
    <div onMouseEnter={popup} onMouseLeave={popup} style={{display:"inline"}} key={term_id}>
      {!error && toggle && <dialog style={{zIndex:"1", backgroundColor:"white"}} open>{def}</dialog>}
      {!error && <a href={`#${term_id}`} style={{display:"inline", textDecoration:"None"}}>[{term_id}]</a>}
      {error && <label style={{display:"inline", color:"red"}}>[{term_id}]</label>}
    </div>
  )
}
Ref.propTypes = {
  id: PropTypes.object.isRequired
}

export default Ref