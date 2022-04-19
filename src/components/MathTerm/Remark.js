import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Remark component
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
 * <Remark id="unique_id">Content</Remark>
*/
const Remark = (props) => {
  return (
    <MathTermSkeleton id="Remark">
      {props}
    </MathTermSkeleton>
  )
}

export default Remark
