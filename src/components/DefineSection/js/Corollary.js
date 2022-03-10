import React from 'react'

const Corollary = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Corollary.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Corollary
