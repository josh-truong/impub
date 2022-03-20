import React from 'react'
import MathTermsSkeleton from './MathTermsSkeleton'

const Theorem = (props) => {
  return (
    <MathTermsSkeleton>
      {props}
    </MathTermsSkeleton>
  )
}

export default Theorem
