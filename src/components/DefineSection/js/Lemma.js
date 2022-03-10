import React from 'react'

const Lemma = (props) => {
  return (
    <div key={props.section_number} id={props.id}>
      <b>{Lemma.name} {props.id}. </b>{props.children}
    </div>
  )
}

export default Lemma
