import React from 'react'

const MathTermsSkeleton = (props) => {
    props = props.children
    return (
        <div key={props.section_number} id={props.id}>
            <b>{props.section_name} {props.id}. </b>{props.children}
        </div>
    )
}

export default MathTermsSkeleton