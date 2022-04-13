import React from 'react'
import { Var, Scope, Result, MathTex } from "../../components/Calculator"


const InteractiveCalculator = () => {  
  return (
    <div>
      <Scope scope='eq1' expr='k*n+1' />
      
      If we let <Var id={{'eq1':'k'}} min={1} max={10} /> and <Var id={{'eq1':'n'}} /> for 
      the expression f = <MathTex scope='eq1'/>, then f = <Result scope='eq1' />.
    </div>
  )
}

export default InteractiveCalculator