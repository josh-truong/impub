import React from 'react'
import { Var, Scope, Result, MathTex } from "../../components/Calculator"


const InteractiveCalculator = () => {  
  return (
    <div>
      <Scope scope='eq1' expr='k*n+1' />
      If we let k = <Var scope='eq1' var='k' min={1} max={10} /> and
      n = <Var scope='eq1' var='n' min={1} max={10} /> for the expression
      f = <MathTex scope='eq1'/>, then f = <Result scope='eq1' />.
    </div>
  )
}

export default InteractiveCalculator