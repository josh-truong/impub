import React, { useState } from 'react'
import PropTypes from 'prop-types';

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
  const [mathJsExpr, setMathJsExpr] = useState('k*n+1') // math js expression to evaluate
  const [latexExpr, setLatexExpr] = useState(math.parse(mathJsExpr).toTex()) // Convert math js expression to tex
  const [result, setResult] = useState(0) // Store evaluated expression



  function handleCallBack(e) {
    const key = Object.keys(e)
    setScope(prevState => ({
      ...prevState,
      [key]: e[key] // Update variable value
    }))

    
    let expr;
    try { expr = math.parse(mathJsExpr).compile() } // Compile expression
    catch(error) { setError(true); console.log(error) }


    try { // Evaluate given expression
      const output = expr.evaluate(scope) // Evaluate expression
      setResult(output)
    } catch(error) { setError(true); console.log(error) }
  }
  
  return (
    <div>
      {
        Object.keys(scope).map((key) => (
          <Slider key={key} id={key} value={handleCallBack} max={10} />
        ))
      }
      <Latex expr={`$${latexExpr} = $`} /> {error ? <span style={{color:'red'}}>{result}</span> : result }
    </div>
  )
}

export default Scope



/*
  <Scope>
    - Input
      - Array of variables
      - Expression to evaluate

    - Process
      - How to refer a variable within scope
        - Can global variables work?

  - If not all variables are present and math.evaluate returns compile error display only latex and change stated variable to number




*/