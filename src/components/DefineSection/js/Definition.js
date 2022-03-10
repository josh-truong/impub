import React from 'react'

const Definition = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Definition.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Definition
