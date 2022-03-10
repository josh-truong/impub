import React from 'react'

const Notation = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Notation.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Notation
