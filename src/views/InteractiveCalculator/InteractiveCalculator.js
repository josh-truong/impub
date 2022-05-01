import React, { useState, useEffect } from 'react'
import { Var, Scope, Result, MathTex } from "../../components/Evaluate"
import Tex from '../../components/Tex'

const InteractiveCalculator = () => {
  const sf = [1, 2, 3, 4, 5]
  const [on, seton] = useState(0)
  useEffect(() => {
  }, [on])
  return (
    <div>

      <Scope scope='eq1' expr='k*n+1' /> <br />
      If we let <Var id={{ 'eq1': 'k' }} /> and <Var id={{ 'eq1': 'n' }} /> for
      the expression f = <MathTex scope='eq1' />, then f = <Result scope='eq1' />.

    </div>
  )
}

export default InteractiveCalculator