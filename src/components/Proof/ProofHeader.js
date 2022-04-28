import React from 'react';
import styles from './css/ProofHeader.module.css';

var classNames = require('classnames');

/**
 * ProofHeader component
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
 * <ProofHeader>Content</ProofHeader>
*/
const ProofHeader = (props) => {
  var container = classNames(styles.container, true);
  return (
    <div className={container}>
      {/* props.children retireves content in-between element/component tags*/}
      {props.children}
    </div>
  )
}

export default ProofHeader
