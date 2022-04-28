import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Theorem component
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
 * <Theorem id="unique_id">Content</Theorem>
*/
const Theorem = (props) => {
  return (
    <MathTermSkeleton term_name="Theorem" id={props.id}>
      {props.children}
    </MathTermSkeleton>
  )
}

export default Theorem
