import React from 'react'

const Theorem = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Theorem.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Theorem
