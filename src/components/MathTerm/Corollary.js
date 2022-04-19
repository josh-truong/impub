import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Corollary component
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
 * <Corollary id="unique_id">Content</Corollary>
*/
const Corollary = (props) => {
  return (
    <MathTermSkeleton id="Corollary">
      {props}
    </MathTermSkeleton>
  )
}

export default Corollary
