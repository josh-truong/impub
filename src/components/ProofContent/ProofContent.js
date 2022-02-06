import React from 'react';

import styles from './ProofContent.module.css';

var classNames = require('classnames');

const ProofContent = (props) => {
  var container = classNames(styles.container, true);
  
  return (
    <div className={container}>
      {/* props.children retireves content in-between element/component tags*/}
      {props.children}
    </div>
  )
}

export default ProofContent
