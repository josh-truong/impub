import React, { useState } from 'react'
import styles from '../css/ProofSubsection.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

var classNames = require('classnames');


/**
 * ProofSubsection component <br/>
 * 
 * Takes the Header and Content component and turns it into an 
 * expand/contract section. 
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.children - Content between tags
 * 
 * @requires Proof
 * @requires ProofHeader
 * @requires ProofContent
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <ProofSubsection>Content</ProofSubsection>
*/
const ProofSubsection = (props) => {
  var container = classNames(styles.container, true);
  var handrail = classNames(styles.handrail, true);
  var toggleTD = classNames(styles.toggleTD, true);

  
  const [toggle, setToggle] = useState(true);
  function toggleProof(e) {
    setToggle(!toggle);
  }
  return (
    <div className={container}>
      <div onDoubleClick={toggleProof}>{props.children[0]}</div>
      {toggle ? null : <ArrowBackIosIcon style={{transform: "rotate(-90deg)", width:"20px", height:"auto"}} onClick={toggleProof} />}
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

export default ProofSubsection
