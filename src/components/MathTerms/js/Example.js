import React from 'react'
import MathTermsSkeleton from './MathTermsSkeleton'

const Example = (props) => {
  return (
    <MathTermsSkeleton id="Example">
      {props}
    </MathTermsSkeleton>
  )
}

export default Example