import React from 'react';
import { Lemma, Proposition, Theorem, Ref } from '../../components/MathTerm';
import { Proof, ProofHeader, ProofContent } from '../../components/Proof';
import Tex from '../../components/Tex';

const Demo = () => {
  return (
    <div>
      <h5><b>3. Results and proofs</b></h5>
      The main reduction used is the following: <br /><br />
      <Lemma id='3.1'>
        There is a function <Tex expr='$f \in FP$' /> from propositional formulae in conjunctive normal form to matrices with entries
        from <Tex expr='$\{-1,0,1,2,3\}$' /> such that <Tex expr='$$\forall F \;\; \text{Perm}(f(F)) = 4^{t(F)} \cdot s(F)$$' /> where <Tex expr='t(F)' /> denotes
        "twice the number of occurrences of literals in <Tex expr='F' />, minus the number of clauses in <Tex expr='F' />", and <Tex expr='s(F)' /> is the number
        of assignments that satisfy <Tex expr='F' />.
      </Lemma>

      To prove # P-hardness for the permanent of general integer matrices we need only the following additional fact. <br /><br />

      <Lemma id='3.2'>
        There is a function <Tex expr='$g \in FP$' /> that maps an arbitary There is a function <Tex expr='$NP$' /> <Tex expr='$TM$' /> <Tex expr='$M$' /> and an
        input <Tex expr='$x$' /> for it to a propositional formula in 3-conjunctive normal form such that the number of satisfying assignments
        of <Tex expr='$g(M,x)$' /> is equal to the number of accepting computations of <Tex expr='$M$' /> on <Tex expr='$x$' />.
      </Lemma>

      <Proof>
        By a modification of Cook's construction [3] using the idea of [2]. See [19] or [25].
      </Proof>
      
      To obtain results for (0,1)-matrices we also need the following:
      
      <Lemma id='3.3'>
        There is a transformation <Tex expr='$h$' />, computable in time polynomial in <Tex expr='$m$' /> and the order of the matrix, that maps 
        matrices with elements from the set <Tex expr='$\{0,1,...,m\}$' /> to (0,1)-matrices such 
        that <Tex expr='$$\forall A \;\; \text{Perm}A = \text{Perm }h(A)$$' />.
      </Lemma>

      Before proving Lemmas <Ref id='3.1'/> and <Ref id='3.3'/> we observe that Theorems <Ref id='1'/> and <Ref id='2'/> follow from them.
      
      {/* <Proposition id='3.4'>

      </Proposition>

      <Theorem id='1'>

      </Theorem> */}
    </div>
  )
}

export default Demo
