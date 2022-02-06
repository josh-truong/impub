import React from 'react';
import styles from './headerProof.module.css';

var classNames = require('classnames');

const HeaderProof = (props) => {
  var container = classNames(styles.container, true);
  return (
    <div className={container}>
      {/* props.children retireves content in-between element/component tags*/}
      {props.children}
    </div>
  )
}

export default HeaderProof
