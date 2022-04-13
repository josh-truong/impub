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
 * @function MathTermSkeleton
 * @param {Object} props - Component props
 * @property {String} props.children.id - To identify 
 * @property {String} props.id - 
 * @property {Element} props.children.children - 
 * 
*/
const MathTermSkeleton = (props) => {
    const dispatch = useDispatch();

    const id = props.children.id
    const term_name = props.id
    const def = props.children.children

    useEffect(() => {
        dispatch({ type: ADD_TERM, id, def })
    }, [dispatch])


    return (
        <div key={id} id={id}>
            <b>{term_name} {id}. </b>{def}
        </div>
    )
}

MathTermSkeleton.propTypes = {
    id: PropTypes.string.isRequired
}
export default MathTermSkeleton