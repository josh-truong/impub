import React, { useState } from 'react'
import styles from './proofItem.module.css';

var classNames = require('classnames');

const ProofItem = (props) => {
  var handrail =  classNames(styles.handrail, true);
  var toggleTD = classNames(styles.toggleTD, true);

  
  const [toggle, setToggle] = useState(true);
  function toggleProof(e) {
    setToggle(!toggle);
  }
  return (
    <div>
      <div onDoubleClick={toggleProof}>{props.children[0]}</div>
      { !toggle ? null :
        <table>
          <tbody>
            <tr>
              <td className={toggleTD} onClick={toggleProof}></td>
              <td>
                <div className={handrail}>
                  {props.children.slice(1)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>}
    </div>
  )
}

export default ProofItem
