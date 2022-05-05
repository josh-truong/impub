import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
/**
 * Returns the result of an evaluted expression, may contain partial expression or a numeric answer.
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.scope - Scope name
 * 
 * @requires Scope
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Result scope='scope name' />
*/
const Result = (props) => {
    const result = useSelector(state => {
        try {
            return state.EvalReducer[props.scope].result;
        } catch(error) { return null }
    });

    useEffect(() => {
    }, [result])

    return (
        <span style={{color:'#2695fd'}}>
            {`$${result}$`}
        </span>
    )
}

Result.propTypes = {
    scope: PropTypes.string.isRequired
};

export default Result
