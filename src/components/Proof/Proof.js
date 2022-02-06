import React from 'react';
import HeaderProof from '../HeaderProof/HeaderProof';
import ContentProof from '../ContentProof/ContentProof';
import styles from './proof.module.css';

var classNames = require('classnames');

const Proof = () => {
  var container = classNames(styles.container, true);
  var handrail =  classNames(styles.handrail, true);
  return (
    <div className={container}>
      <div className={handrail}>
        <HeaderProof>
          SUFFICES to ASSUME that
          <ContentProof>
            Hello
          </ContentProof>
        </HeaderProof>
      </div>
    </div>
  )
}

export default Proof
