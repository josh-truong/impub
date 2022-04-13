import React from 'react';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Result = (props) => {
    const result = useSelector(state => {
        try {
            return state.CalcReducer[props.scope].result;
        } catch(error) { return null }
    });

    return (
        <span style={{color:'#2695fd'}}>{result}</span>
    )
}

Result.propTypes = {
    scope: PropTypes.string.isRequired
};

export default Result
