import React, { useState } from 'react'
import styles from './ProofSubsection.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

var classNames = require('classnames');

const ProofSubsection = (props) => {
  var handrail =  classNames(styles.handrail, true);
  var toggleTD = classNames(styles.toggleTD, true);

  
  const [toggle, setToggle] = useState(true);
  function toggleProof(e) {
    setToggle(!toggle);
  }
  return (
    <div>
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
