import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Proposition component
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
 * <Proposition id="unique_id">Content</Proposition>
*/
const Proposition = (props) => {
  return (
    <MathTermSkeleton id="Proposition">
      {props}
    </MathTermSkeleton>
  )
}

export default Proposition
