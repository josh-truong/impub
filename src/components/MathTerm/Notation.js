import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Notation component
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.children - Content between tags
 * 
 * @requires MathTermSkeleton
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Notation id="unique_id">Content</Notation>
*/
const Notation = (props) => {
  return (
    <MathTermSkeleton term_name="Notation" id={props.id}>
      {props.children}
    </MathTermSkeleton>
  )
}

export default Notation
