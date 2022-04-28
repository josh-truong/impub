import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Example component
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
 * <Example id="unique_id">Content</Example>
*/
const Example = (props) => {
  return (
    <MathTermSkeleton term_name="Example" id={props.id}>
      {props.children}
    </MathTermSkeleton>
  )
}

export default Example