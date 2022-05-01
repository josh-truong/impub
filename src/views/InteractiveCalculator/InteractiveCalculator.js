import React from 'react'
import { Var, Scope, Result, MathTex } from "../../components/Evaluate"
import { MathComponent } from 'mathjax-react'

const InteractiveCalculator = () => {
  return (
    <div>

      <Scope scope='eq1' expr='k*n+1' /> <br />
      If we let <Var id={{ 'eq1': 'k' }} /> and <Var id={{ 'eq1': 'n' }} /> for
      the expression f = <MathTex scope='eq1' />, then f = <Result scope='eq1' />.
    </div>
  )
}

export default InteractiveCalculator