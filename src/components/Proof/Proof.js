import React from 'react';

import styles from './Proof.module.css';

var classNames = require('classnames');

/*
Component Order ( Proof -> ProofHeader -> ProofItem -> ProofHeader -> ProofContent)
Proof
| ProofHeader
  | ProofItem
  | | ProofHeader
  | | | ProofContent
  | | ProofHeader
  | | | ProofContent
  | ProofItem
  | | ProofHeader
  | | | ProofContent
  | | | ProofContent
  | | ProofHeader
  | | | ProofContent
*/

const Proof = (props) => {
  var container = classNames(styles.container, true);

  return (
    <div className={container}>
      {props.children}
    </div>
  )
}

export default Proof
