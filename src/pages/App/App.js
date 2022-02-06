import './App.css';
import Proof from '../../components/Proof/Proof';
import ProofHeader from '../../components/ProofHeader/ProofHeader';
import ProofContent from '../../components/ProofContent/ProofContent';
import ProofItem from '../../components/ProofItem/ProofItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Proof>
            <ProofItem>
              <ProofHeader>
                [Header] There is some x in (a,b) with f(x)' = (f(b)-f(a))/(b-a),
              </ProofHeader>
              <ProofContent>
                [Content] f is differentiable on [a,b]. The following equation has nothing to do with the proof but illustrates the feature of displayed math within a sub-step.
                <ProofItem>
              <ProofHeader>
                [Header] There is some x in (a,b) with f(x)' = (f(b)-f(a))/(b-a),
              </ProofHeader>
              <ProofContent>
                [Content] f is differentiable on [a,b]. The following equation has nothing to do with the proof but illustrates the feature of displayed math within a sub-step.
              </ProofContent>
              <ProofContent>
                [Content] f is differentiable on [a,b]. The following equation has nothing to do with the proof but illustrates the feature of displayed math within a sub-step.
              </ProofContent>
            </ProofItem>
              </ProofContent>
              <ProofContent>
                [Content] f is differentiable on [a,b]. The following equation has nothing to do with the proof but illustrates the feature of displayed math within a sub-step.
              </ProofContent>
            </ProofItem>
            <ProofItem>
              <ProofHeader>
                [Header] There is some x in (a,b) with f(x)' = (f(b)-f(a))/(b-a),
              </ProofHeader>
              <ProofContent>
                [Content] f is differentiable on [a,b]. The following equation has nothing to do with the proof but illustrates the feature of displayed math within a sub-step.
              </ProofContent>
              <ProofContent>
                [Content] f is differentiable on [a,b]. The following equation has nothing to do with the proof but illustrates the feature of displayed math within a sub-step.
              </ProofContent>
            </ProofItem>
          </Proof>
      </header>
    </div>
  );
}

export default App;