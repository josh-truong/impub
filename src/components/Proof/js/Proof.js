import React from 'react';
import styles from '../css/Proof.module.css';
var classNames = require('classnames');

/*
Component Order ( Proof -> ProofHeader -> ProofSubsection -> ProofHeader -> ProofContent)
Proof
| ProofHeader
  | ProofSubsection
  | | ProofHeader
  | | | ProofContent
  | | ProofHeader
  | | | ProofContent
  | ProofSubsection
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
