import React from 'react';

import styles from './Proof.module.css';

var classNames = require('classnames');

const Proof = (props) => {
  var container = classNames(styles.container, true);

  return (
    <div className={container}>
      {props.children}
    </div>
  )
}

export default Proof
