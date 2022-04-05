import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux';
import { ADD_TERM } from '../../constants'

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