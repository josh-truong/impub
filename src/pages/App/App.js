import './App.css';
import Proof from '../../components/Proof/Proof';
import ProofHeader from '../../components/ProofHeader/ProofHeader';
import ProofContent from '../../components/ProofContent/ProofContent';
import ProofItem from '../../components/ProofItem/ProofItem';
import Latex from '../../components/Latex/Latex'

function App() {
  return (
    <div className="App">
      <header className="App-header container">
          <Proof>
            <ProofHeader>
              Proof.
            </ProofHeader>
            <ProofItem>
              <ProofHeader>
                We adaot this idea to the context of 3-way arrays. Let <Latex expr="$A$"/> be an <Latex expr="$l \times n \times m$"/> 3-way array, with lateral
                slices <Latex expr="$L_{1},L_{2},...,L_{n}$"/> (each an <Latex expr="$l \times m$"/> matrix). For any vector <Latex expr="$v \in \mathbb{F}^{n}$"/>
                we get an associated lateral <Latex expr="$L_{v}$"/>, which is a linear combination of the lateral slices as given,
                namely <Latex expr="$L_{v} \mathrel{\vcenter{:}}= \sum_{j=1}^{n} v_{j}L_{j}$"/> (note that when <Latex expr="$v = \vec{e}_j$"/> is
                the <Latex expr="$j-th$"/> standard basis vector, the associated lateral matrix is indeed <Latex expr="$L_{j}$"/>). By analogy with adjacency matrices 
                of graphs, <Latex expr="$L_{v}$"/> is a natural analogue of the neighborhood of a vertex in a graph. Correspondingly, we get a notion of “degree,” 
                which we may define as
              </ProofHeader>
              <ProofContent>
                <Latex expr="$$deg_{A}(v) \mathrel{\vcenter{:}}= rkL_{v} = rk(\sum_{j=1}^{n}) = \text{dim span} \{L_{v}\vec{w}:\vec{w} \in \mathbb{F}^{m}\} = \text{dim span}\{\vec{u}^{t}L_{v}:\vec{u} \in \mathbb{F}^{l}\}$$"/>
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
                <Latex expr="(3\times 4) \div (5-3) (a \ne 0)  (ax^2 + bx + c = 0) x = {-b \pm \sqrt{b^2-4ac} \over 2a}" />
              </ProofContent>
            </ProofItem>
          </Proof>
      </header>
    </div>
  );
}

export default App;