import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import Latex from '../Latex'
import { env, setScope, setResult } from './GlobalVar'
var math = require('mathjs')

function recursive_items(dict, variables={}) { // tail recursion method
    for (const [key,value] of Object.entries(dict)) {
      if (key === 'args' && dict[key] instanceof Array) {
        dict[key].forEach(elt => {
          if (elt.hasOwnProperty('name')) {
            variables[Object.values(elt)[0]] = null
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

const Evaluate = (props) => {
    const [error, setError] = useState(false)
    const [result, setResult] = useState(0) // Store evaluated expression
    const mathJsExpr = props.expr // math js expression to evaluate
    const latexExpr = math.parse(mathJsExpr).toTex() // Convert math js expression to tex

    const parser = math.parse(mathJsExpr) // Retrieve Abstract Syntax Tree (AST)
    const scope = recursive_items(parser) // Retrieve variables

    useEffect(() => {
        try { setScope(props.id, mathJsExpr, scope) } // Create scope
        catch(err) { setError(true); console.log(err) }
        console.log(env)
    }, [env])
    

    return (
        <div>
            {error ? <span style={{color:'red'}}>Scope id/expr is invalid<br/></span> : ''}
            <Latex expr={`$${latexExpr} = $`} /> {error ? <span style={{color:'red'}}>{result}</span> : result }
        </div>
    )
}

Evaluate.propTypes = {
    id: PropTypes.string.isRequired,
    expr: PropTypes.string.isRequired
}

export default Evaluate


// let expr;
// try { expr = parser.compile() } // Compile expression
// catch(err) { setError(true); console.log(err) }