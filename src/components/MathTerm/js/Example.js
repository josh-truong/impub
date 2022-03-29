import React from 'react'
import MathTermSkeleton from './MathTermSkeleton'

const Example = (props) => {
  return (
    <MathTermSkeleton id="Example">
      {props}
    </MathTermSkeleton>
  )
}

export default Example