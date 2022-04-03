import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import  { useSelector, useDispatch } from 'react-redux';
import { ADD_SCOPE, UPDATE_VARIABLE } from '../../../constants'


import Slider from './Slider'
import Latex from '../../Latex'
var math = require('mathjs')

/*
  Reference:
  - https://mathjs.org/docs/expressions/parsing.html
*/

function getVariables(node) {
  const filtered = node.filter(function (node) {
      return (node.isSymbolNode && node.name)
  })
  const distinct = Array.from(new Set(filtered.map((elt) => elt.name)))
  var var_dict = {}
  distinct.map((elt) =>  var_dict[elt] = null)
  return var_dict
}


const Scope = (props) => {
  const calculator = useSelector(state => state.calcReducer)
  const dispatch = useDispatch();

  console.log(props)
  useEffect(() => {
    dispatch({ type: ADD_SCOPE, scope:'eq1', expr:'k*n+1'})
  }, [dispatch])
  
  return (
    <></>
  )
}

export default Scope