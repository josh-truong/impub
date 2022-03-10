import React from 'react'

const Proposition = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Proposition.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Proposition
