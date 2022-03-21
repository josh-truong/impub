import React from 'react'
import { set_dict } from '../js/GlobalVar'

const MathTermsSkeleton = (props) => {
    
    var id = props.children.id
    var term_name = props.id
    var content = props.children.children
    
    set_dict(id, content);
    
    return (
        <div key={id} id={id}>
            <b>{term_name} {id}. </b>{content}
        </div>
    )
}

export default MathTermsSkeleton