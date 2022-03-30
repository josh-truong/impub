import React, {useState} from 'react'
import { Var, Evaluate, Scope } from "../../components/Calculator/Calculator"
const InteractiveCalculator = () => {
  const [val, setVal] = useState({});
  

  return (
    <div>
      <Scope />
      
      {/* <Var id={{'eq':'k'}} min={1} max={10} />
      <Var id={{'eq':'n'}} min={1} max={10} />
      <Evaluate id='eq' expr='k*n+1'/> */}
    </div>
  )
}

export default InteractiveCalculator


/*
  Scope is to declare expression and variables
  - Will be added to GlobalVars

  Var will render slider and input box for interactivity
  - Var should be declared before Evaluate
  
  Evaluate will evaluate expression
  - If not all variables are well-defined substitue only those variables
  - If all variables are well-defined, evaluate expreesion

  Add a feature where if mathjs expression is valid then render expreesion
  in tex form
*/