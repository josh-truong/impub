import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Slider from './Slider'
import Latex from '../../Latex/Latex'
var math = require('mathjs')

/*
  Reference:
  - https://mathjs.org/docs/expressions/parsing.html
*/
const Scope = () => {
  const [error, setError] = useState(false)
  const [scope, setScope] = useState({ k:0, n:0 }) // Variable scope
  const mathJsExpr = 'k*n+1' // math js expression to evaluate
  const latexExpr = math.parse(mathJsExpr).toTex() // Convert math js expression to tex
  const [result, setResult] = useState(0) // Store evaluated expression
  let expr;


  function handleCallBack(e) {
    const key = Object.keys(e)
    setScope(prevState => ({
      ...prevState,
      [key]: e[key] // Update variable value
    }))
    
    try { expr = math.parse(mathJsExpr).compile() } // Compile expression
    catch(error) { setError(true); console.log(error) }

    try { setResult(expr.evaluate(scope)) } // Evaluate expression
    catch(error) { setError(true); console.log(error) }
  }

  return (
    <div>
      {
        Object.keys(scope).map((key) => (
          <Slider key={key} id={key} value={handleCallBack} min={1} max={10} />
        ))
      }
      <Latex expr={`$${latexExpr} = $`} /> {error ? <span style={{color:'red'}}>{result}</span> : result }
    </div>
  )
}

export default Scope