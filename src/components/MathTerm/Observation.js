import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Observation component
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
 * <Observation id="unique_id">Content</Observation>
*/
const Observation = (props) => {
  return (
    <MathTermSkeleton term_name="Observation" id={props.id}>
      {props.children}
    </MathTermSkeleton>
  )
}

export default Observation
