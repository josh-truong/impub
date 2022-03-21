import React from 'react'
import MathTermsSkeleton from './MathTermsSkeleton'

const Theorem = (props) => {
  return (
    <MathTermsSkeleton id="Theorem">
      {props}
    </MathTermsSkeleton>
  )
}

export default Theorem
