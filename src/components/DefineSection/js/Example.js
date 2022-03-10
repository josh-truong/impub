import React from 'react'

const Example = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Example.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Example
