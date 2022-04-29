import React from 'react';


/**
 * Proof component
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.children - Content between tags
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Proof>Content</Proof>
*/
const Proof = (props) => {
  const proof_header = (props.title) ? props.title : 'Proof.'
  return (
    <div>
      <b>{proof_header}</b> {props.children}
    </div>
  )
}

export default Proof
