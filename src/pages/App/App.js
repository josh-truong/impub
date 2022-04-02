import { DisplayProof, DisplayDefRef, Features, InteractiveCalculator }
  from '../index.js';
import  { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions/index'


function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Oops</h3> : ''}


      {/* <DisplayProof/> */}
      {/* <DisplayDefRef/> */}
      {/* <Features/> */}
      {/* <InteractiveCalculator/> */}
    </div>
  );
}

export default App;

