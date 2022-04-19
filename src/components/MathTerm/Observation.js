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
    <MathTermSkeleton id="Observation">
      {props}
    </MathTermSkeleton>
  )
}

export default Observation
