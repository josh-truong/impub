import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux';
import { ADD_SCOPE } from '../../../constants'


const Scope = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ADD_SCOPE, scope: props.scope, expr: props.expr })
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