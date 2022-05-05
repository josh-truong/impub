import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux';
import { ADD_TERM } from '../../constants'

/**
 * Skeleton Code for MathTerms. <br/>
 *
 * The skeleton provides some flexibilty to users who wants to 
 * use other definitions/terms in their work, but does not exists
 * within the current library.
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.term_name - MathTerm Component Name
 * @property {String} props.id - Unique Id of MathTerm
 * @property {Element} props.children - Definition of term
 * 
 * @returns {React_Elements} Returns React Element
 * 
 * @example
 * <Corollary id="unique section name">[Content]</Corollary>
 * <Definition id="unique section name">[Content]</Definition>
 * <Example id="unique section name">[Content]</Example>
 * <Lemma id="unique section name">[Content]</Lemma>
 * <Notation id="unique section name">[Content]</Notation>
 * <Observation id="unique section name">[Content]</Observation>
 * <Proposition id="unique section name">[Content]</Proposition>
 * <Remark id="unique section name">[Content]</Remark>
 * <Theorem id="unique section name">[Content]</Theorem>
*/
const MathTermSkeleton = (props) => {
    const dispatch = useDispatch();
    const term_name = props.term_name
    const term_id = props.id
    const def = props.children

    useEffect(() => {
        dispatch({ type: ADD_TERM, term_name, term_id, def })
    }, [dispatch])


    return (
        <div key={term_id} id={term_id}>
            <b>{term_name} {term_id}. </b>{def}
        </div>
    )
}

MathTermSkeleton.propTypes = {
    id: PropTypes.string.isRequired
}
export default MathTermSkeleton