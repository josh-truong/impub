import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import  { useDispatch } from 'react-redux';
import { ADD_SCOPE } from '../../../constants'

/**
 * The Scope must be declared first before using MathTex, Result, Var.
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.scope - Scope name 
 * @property {String} props.expr - Scope Expression
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Scope scope='scope_name' expr='valid mathjs expression' />
*/
const Scope = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ADD_SCOPE, scope:props.scope, expr:props.expr})
  }, [dispatch])
  
  return (
    <>{props.children}</>
  )
}

Scope.propTypes = {
  scope: PropTypes.string.isRequired,
  expr: PropTypes.string.isRequired
};

export default Scope