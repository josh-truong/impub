import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Definition component
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
 * <Definition id="unique_id">Content</Definition>
*/
const Definition = (props) => {
  return (
    <MathTermSkeleton id="Definition">
      {props.children}
    </MathTermSkeleton>
  )
}

export default Definition