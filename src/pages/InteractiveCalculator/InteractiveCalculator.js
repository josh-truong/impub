import React, {useState} from 'react'
import { Var, Scope } from "../../components/Calculator"

import  { useSelector, useDispatch } from 'react-redux';
import { ADD_SCOPE, UPDATE_VARIABLE } from '../../constants'

const InteractiveCalculator = () => {
  const [val, setVal] = useState({});

  const calculator = useSelector(state => state.calcReducer)
  const dispatch = useDispatch();
  
  return (
    <div>
      <Scope scope='eq1' expr='k*n+1' />
      <Var scope='eq1' var='k' min={1} max={10} />
      <Var scope='eq1' var='n' min={1} max={10} />
    </div>
  )
}

export default InteractiveCalculator