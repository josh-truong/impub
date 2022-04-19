import React from 'react';

/**
 * ProofContent component
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.children - Content between tags
 * 
 * @requires Proof
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <ProofContent>Content</ProofContent>
*/
const ProofContent = (props) => {
  return (
    <div>
      {/* props.children retireves content in-between element/component tags*/}
      {props.children}
    </div>
  )
}

export default ProofContent
