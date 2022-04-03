import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Slider from './Slider'
import Latex from '../../Latex'
var math = require('mathjs')

/*
  Reference:
  - https://mathjs.org/docs/expressions/parsing.html
*/

function recursive_items(dict, variables={}) { // tail recursion method
  for (const [key,value] of Object.entries(dict)) {
    if (key === 'args' && dict[key] instanceof Array) {
      dict[key].forEach(elt => {
        if (elt.hasOwnProperty('name')) {
          variables[Object.values(elt)[0]] = 0
        }
        else if (elt.hasOwnProperty('content')) {
          recursive_items(elt.content, variables)
        } else {
          recursive_items(elt, variables)
        }
      })
    }
  }
  return variables
}

const Scope = () => {
  const mathJsExpr = 'k*n+1' // math js expression to evaluate
  const [error, setError] = useState(false)
  const [scope, setScope] = useState(recursive_items(math.parse(mathJsExpr))) // Variable scope
  
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