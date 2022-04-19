import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

/**
 * Lemma component
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
 * <Lemma id="unique_id">Content</Lemma>
*/
const Lemma = (props) => {
  return (
    <MathTermSkeleton id="Lemma">
      {props}
    </MathTermSkeleton>
  )
}

export default Lemma
