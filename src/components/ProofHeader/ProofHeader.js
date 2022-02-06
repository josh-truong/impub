import React from 'react';
import styles from './ProofHeader.module.css';

var classNames = require('classnames');

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
