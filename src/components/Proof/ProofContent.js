import React, { useState } from 'react'
import styles from './css/ProofContent.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

var classNames = require('classnames');

/**
 * ProofContent component <br/>
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
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <ProofContent>Content</ProofContent>
*/
const ProofContent = (props) => {
  var container = classNames(styles.container, true);
  var handrail = classNames(styles.handrail, true);
  var toggleTD = classNames(styles.toggleTD, true);

  const [toggle, setToggle] = useState(true);
  function toggleProof(e) { setToggle(!toggle); }
  return (
    <div className={container}>
      {toggle ? null :
        <div>
          <ArrowBackIosIcon style={{ transform: "rotate(-90deg)", width: "20px", height: "auto" }} onClick={toggleProof} />
          <span style={{ padding: "0 5px" }} /><b>{props.label ? props.label : 'Show more'}</b>
        </div>
      }

      {!toggle ? null :
        <table>
          <tbody>
            <tr>
              <td className={toggleTD} onClick={toggleProof}></td>
              <td>
                <div className={handrail}>
                  {props.children}
                </div>
              </td>
            </tr>
          </tbody>
        </table>}

    </div>
  )
}

export default ProofContent
