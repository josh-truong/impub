import React from 'react'

const Remark = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Remark.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Remark
