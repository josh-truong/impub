import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SUB_EXPR } from '../../../constants'


/**
 * The SubExpr component was made with the intent of interacting with 
 * variables that were already declared within the scope. 
 * 
 * @component
 * 
 * @param {Object} scope - Existing scope name
 * @param {Object} expr - Expression that currently uses the variables declared within scope
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <SubExpr scope='existing_scope_name' expr='expression that must only include variables declared within scope' />
*/
const SubExpr = ({ scope, expr }) => {
  const dispatch = useDispatch();
  const result = useSelector(state => {
    try {
      return state.EvalReducer[scope][expr];
    } catch (error) { return null }
  });

  const variables = useSelector(state => {
    try {
      return state.EvalReducer[scope].var;
    } catch (error) { return null }
  });

  useEffect(() => {
    dispatch({ type: SUB_EXPR, scope: scope, expr: expr })
  }, [variables])

  return (
    <span style={{ color: '#2695fd' }}>
      {`$${result}$`}
    </span>
  )
}


export default SubExpr
