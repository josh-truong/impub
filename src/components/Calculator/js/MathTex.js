import React from 'react'
import Latex from '../../Latex'

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const MathTex = (props) => {
    const latexExpr = useSelector(state => {
        try {
            return state.CalcReducer[props.scope].latexExpr;
        } catch (error) { return null }
    });
    return (
        <Latex expr={`$${latexExpr}$`} />
    )
}

MathTex.propTypes = {
    scope: PropTypes.string.isRequired
};

export default MathTex
