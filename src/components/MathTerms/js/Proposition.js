import React from 'react'
import MathTermsSkeleton from './MathTermsSkeleton'

const Proposition = (props) => {
  return (
    <MathTermsSkeleton>
      {props}
    </MathTermsSkeleton>
  )
}

export default Proposition
