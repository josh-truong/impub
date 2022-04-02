import { DisplayProof, DisplayDefRef, Features, InteractiveCalculator }
  from '../index.js';
import  { useSelector, useDispatch } from 'react-redux';
import { ADD_SCOPE, UPDATE_VARIABLE } from '../../constants'

function App() {
  const calculator = useSelector(state => state.calcReducer)
  const dispatch = useDispatch();
  return (
    <div className="container">

      <button onClick={() => dispatch({ type: ADD_SCOPE, scope:'eq1', expr:'k*n+1'})}>
        Add Scope1
      </button>
      <button onClick={() => dispatch({ type: ADD_SCOPE, scope:'eq2', expr:'k*n+1'})}>
        Add Scope2
      </button>
      <button onClick={() => dispatch({ type: UPDATE_VARIABLE, scope:'eq1', var:'k', val:10 })}>
        Update Variable
      </button>
      <button onClick={() => dispatch({ type: UPDATE_VARIABLE, scope:'eq2', var:'k', val:100 })}>
        Update Variable
      </button>


      {/* <DisplayProof/> */}
      {/* <DisplayDefRef/> */}
      {/* <Features/> */}
      {/* <InteractiveCalculator/> */}
    </div>
  );
}

export default App;

