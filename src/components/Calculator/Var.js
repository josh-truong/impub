import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { isVariable, setVariable } from './GlobalVar'

import Slider from './Slider'

const Var = (props) => {
    const scope_id = Object.keys(props.id)[0]
    const var_name = Object.values(props.id)[0]

    const [error, setError] = useState(!isVariable(scope_id, var_name))
    const [val, setVal] = useState(0)
    useEffect(() => {
        setVariable(scope_id, var_name, val)
    }, [val])


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
    id: PropTypes.object.isRequired,
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
