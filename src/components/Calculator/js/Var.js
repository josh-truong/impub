import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import  { useSelector, useDispatch } from 'react-redux';
import { ADD_SCOPE, UPDATE_VARIABLE } from '../../../constants'

import Slider from './Slider'

const Var = (props) => {
    const calculator = useSelector(state => state.calcReducer)
    const dispatch = useDispatch();

    const scope_id = props.scope
    const var_name = props.var

    const [error, setError] = useState(false)
    const [val, setVal] = useState(0)

    useEffect(() => {
        dispatch({ type: UPDATE_VARIABLE, scope:scope_id, var:var_name, val:val })
        console.log(typeof val)
    }, [dispatch, val])


    return (
        <>
            {error ?
                <span style={{color:'red'}}>{scope_id}</span> :
                <Slider key={`${scope_id}+${var_name}`} id={var_name} value={(e) => setVal(e)} min={props.min} max={props.max} step={props.step} />
            }
        </>
    )
}

Var.propTypes = {
    scope: PropTypes.string.isRequired,
    var: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
}

Var.defaultProps = {
    min: 0,
    max: 1,
    step: 1,
}


export default Var
