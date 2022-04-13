import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import  { useSelector, useDispatch } from 'react-redux';
import { ADD_SCOPE, UPDATE_VARIABLE } from '../../../constants'

import Slider from './Slider'

const Var = (props) => {
    const scope_name = Object.keys(props.id)[0]
    const var_name = props.id[scope_name]
    
    const calculator = useSelector(state => state.calcReducer)
    const dispatch = useDispatch();


    const [error, setError] = useState(false)
    const [val, setVal] = useState(0)

    useEffect(() => {
        dispatch({ type: UPDATE_VARIABLE, scope:scope_name, var:var_name, val:val })
    }, [dispatch, val])


    return (
        <>
            {error ?
                <span style={{color:'red'}}>{scope_name}</span> :
                <Slider key={`${scope_name}+${var_name}`} id={var_name} value={(e) => setVal(e)} min={props.min} max={props.max} step={props.step} />
            }
        </>
    )
}

Var.propTypes = {
    id: PropTypes.object,
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
