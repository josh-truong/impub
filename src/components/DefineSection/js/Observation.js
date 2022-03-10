import React from 'react'

const Observation = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Observation.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Observation
