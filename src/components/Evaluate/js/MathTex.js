import React from 'react'
import Tex from '../../Tex'

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


/**
 * The MathTex component retrieves a converted/valid mathjs expression
 * which then gets converted into latex expression via Tex component.
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
 * <MathTex scope='scope name'/>
*/
const MathTex = (props) => {
    const latexExpr = useSelector(state => {
        try {
            return state.EvalReducer[props.scope].latexExpr;
        } catch (error) { return null }
    });
    return (
        <Tex expr={`$${latexExpr}$`} />
    )
}

MathTex.propTypes = {
    scope: PropTypes.string.isRequired
};

export default MathTex
