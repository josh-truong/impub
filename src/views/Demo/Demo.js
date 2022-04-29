import React from 'react';
import { Lemma, Proposition, Theorem, Ref } from '../../components/MathTerm';
import { Proof, ProofContent } from '../../components/Proof';
import Tex from '../../components/Tex';
import fig1 from './fig1.png'
import fig2 from './fig2.png'

const Demo = () => {
  // Assign frequently used terms as variables for better readability and less redundancy 
  const lemma_3_1 = <Ref id={{ 'Lemma': '3.1' }} />
  const lemma_3_2 = <Ref id={{ 'Lemma': '3.2' }} />
  const lemma_3_3 = <Ref id={{ 'Lemma': '3.3' }} />
  const M = <Tex expr='$M$' />
  const x = <Tex expr='$x$' />
  const X = <Tex expr='$X$' />
  const G = <Tex expr='$G$' />
  const A = <Tex expr='$A$' />
  const tab = <span style={{ padding: "0 15px" }} />
  const R_i = <Tex expr='$R_i$' />
  const y = <Tex expr='$y$' />
  const F = <Tex expr='$F$' />
  const K = <Tex expr='$K$' />
  const x_k = <Tex expr='$x_k$' />
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Valiant - The Complexity of Computing The Permanant</h1>
      <h5><b>3. Results and proofs</b></h5>
      {tab}The main reduction used is the following: <br /><br />
      <Lemma id='3.1'>
        There is a function <Tex expr='$f \in FP$' /> from propositional formulae in conjunctive normal form to matrices with entries
        from <Tex expr='$\{-1,0,1,2,3\}$' /> such that <Tex expr='$$\forall F \;\; \text{Perm}(f(F)) = 4^{t(F)} \cdot s(F)$$' /> where <Tex expr='$t(F)$' /> denotes
        "twice the number of occurrences of literals in {F}, minus the number of clauses in {F}", and <Tex expr='$s(F)$' /> is the number
        of assignments that satisfy {F}.
      </Lemma>

      {tab}To prove # P-hardness for the permanent of general integer matrices we need only the following additional fact. <br /><br />

      <Lemma id='3.2'>
        There is a function <Tex expr='$g \in FP$' /> that maps an arbitary There is a function <Tex expr='$NP$' />, <Tex expr='$TM$' />, {M} and an
        input {x} for it to a propositional formula in 3-conjunctive normal form such that the number of satisfying assignments
        of <Tex expr='$g(M,x)$' /> is equal to the number of accepting computations of {M} on {x}.
      </Lemma>

      <Proof>
        By a modification of Cook's construction [3] using the idea of [2]. See [19] or [25].
      </Proof>

      {tab}To obtain results for (0,1)-matrices we also need the following:

      <Lemma id='3.3'>
        There is a transformation <Tex expr='$h$' />, computable in time polynomial in {M} and the order of the matrix, that maps
        matrices with elements from the set <Tex expr='$\{0,1,...,m\}$' /> to (0,1)-matrices such
        that <Tex expr='$$\forall A \;\; \text{Perm}A = \text{Perm }h(A).$$' />
      </Lemma>

      {tab}Before proving Lemmas {lemma_3_1} and {lemma_3_3} we observe that
      Theorems <Ref id={{ 'Theorem': '1' }} /> and <Ref id={{ 'Theorem': '2' }} /> follow from them.
      <Proposition id='3.4'>
        For some positive constant <Tex expr='$d$' /> the problem of computing the permanent mod <Tex expr='$r$' />, given an
        <Tex expr='$n \times n$' /> (0,1)-matrix and a positive integer <Tex expr='$r < d n \log_2 n$' />, is # P-hard.
      </Proposition>

      <Proof>
        If C is an integer matrix in which no entry is larger than <Tex expr='$\mu$' /> in magnitude then <Tex expr='$|\text{Perm } C| \leq \mu^{n} \cdot n!$' />

        <ProofContent>
          To compute <Tex expr='$\text{Perm } C$' /> it is sufficient to compute its value <Tex expr='$\text{mod } p_i$' /> for each <Tex expr='$p_i$' /> in some set
          <Tex expr='$\{p_i,...p_t\}$' /> of distinct prime numbers whose product exceeds <Tex expr='$2\mu^n \cdot n!$' /> For some constant <Tex expr="$d'$" /> it is
          always sufficient that each <Tex expr="$p_i < d'n(\log_2 \mu n)$" /> [7, p.342]. But, by Lemma {lemma_3_3}, for each
          <Tex expr='$p_i$' />, <Tex expr='$C \text{ mod } p_i$' /> can be transformed in polynomial time into a (0,1)-matrix with the same permanent. The result
          therefore follows from Lemmas {lemma_3_1} and {lemma_3_2}.
        </ProofContent>
      </Proof>

      <Theorem id='1'>
        Computing the permanent of a (0,1)-matrix is # P-complete.
      </Theorem>

      <Proof>
        Proposition <Ref id={{ 'Proposition': '3.4' }} /> implies that the problem is # P-hard. That it also belongs to # P is immediate.
      </Proof>

      <Theorem id='2'>
        For any fixed positive integer {K} that is not an exact power of two, computing the permanent <Tex expr='$\text{mod} K$' /> of
        (0,1)-matrices is UP-hard.
      </Theorem>

      <Proof>
        From Lemmas {lemma_3_1} and {lemma_3_2} given any <Tex expr='$UP$' /> machine {M} and an input
        {x} the permanent of the matrix <Tex expr='$f(g(M,x))$' /> will equal either <Tex expr='$4^{t(F)}$' /> or zero according to whether
        {M} accepts {x}. Hence <Tex expr='$\text{Perm } f(g(M,x))$' /> will be divisible by {K} if and only if {M} does
        not accept <Tex expr='$x$' />.
      </Proof>

      <Proof title='Proof of Lemma 3.1.'>
        Any <Tex expr='$n \times n$' /> matrix {A} can be regarded as the adjacency matrix
        of an <Tex expr='$n$' />-node weighted directed graph {G} where <Tex expr='$A_{ij}$' /> gives the weight of the edge
        from node <Tex expr='$i$' /> to node <Tex expr='$j$' />. Each additive term in Perm {A} corresponds to the product of
        the weights of the edges in some set of node-disjoint directed cycles that cover all the nodes of {G} (called “cycle
        covers” for short). To prove our result we exhibit a function  <Tex expr='$f$' /> such that in the graph associated
        with <Tex expr='$f(F)$' /> the cycle covers that correspond to satisfying assignments of <Tex expr='$F$' /> will each
        contribute <Tex expr='$4^{t(F)}$' /> to the permanent, while the contributions of all the “spurious” cycle covers will cancel each other out.
        <br />
        <ProofContent>
          {tab}Let <Tex expr='$F = C_1 \wedge C_2 \wedge \dots \wedge C_r$' /> where <Tex expr='$C_i = (y_{i1} \vee y_{i2} \vee y_{i3})$' /> with
          &nbsp; <Tex expr='$y_{ij} \in \{x_1,\bar{x}_1,x_2,\bar{x}_2\},\ldots,x_m,\bar{x}_m$' />. (N.B. This assumption of 3-form is not essential.) We
          construct the graph <Tex expr='$G = f(F)$' /> by superposing the following structures: a track <Tex expr='$T_k$' /> for each variable {x_k},
          an interchange {R_i} for each clause <Tex expr='$C_i$' />, and, for each literal <Tex expr='$y_{i,j}$' /> such that
          <Tex expr='$y_{i,j}$' /> is {x_k} or <Tex expr='$\bar{x}_k$' />, a junction <Tex expr='$J_{i,k}$' /> at which {R_i} and
          <Tex expr='$T_k$' /> meet. Interchanges also have internal junctions of the same structure as junctions. The construction of the tracks and interchanges
          is taken from a proof in [23] which itself is adapted from one in [9]. We describe them in Fig. 1 by an example
          fragment. <Tex expr='$T_5$' /> and <Tex expr='$R_3$' /> are shown for the case where <Tex expr='$C_3 = (x_{2} \vee \bar{x}_5 \vee x_{7})$' />, and where
          <Tex expr='$x_5$' /> occurs in <Tex expr='$C_2$' /> and <Tex expr='$C_5$' />, and <Tex expr='$\bar{x}_5$' /> in <Tex expr='$C_3$' />.
          <br />
          {tab}We assume that all the edges outside junctions or internal junctions are weighted one.
          <img src={fig1}/><br />

          {tab}The crucial part of the construction is the structure of the junctions. The junctions and internal junctions are all identical four-node
          weighted digraphs corresponding to the following <Tex expr='$4 \times 4$' /> matrix {X}.
          <Tex expr='$$X = 
                          \begin{bmatrix}
                          0 & 1 & -1 & -1 \\
                          1 & -1 & 1 & 1 \\
                          0 & 1 & 1 & 2 \\
                          0 & 1 & 3 & 0
                          \end{bmatrix}.$$' 
          />

          Each one has external connections only via nodes 1 and 4 and not via 2 or 3.
          <br />
          {tab}Denoting by <Tex expr='$X(\gamma; \delta)$' /> the matrix {X} with rows <Tex expr='$\gamma$' /> and
          columns <Tex expr='$\delta$' /> removed, the following properties of {X} can be verified:
          <br />
          <ol type="i">
            <li><Tex expr='$\text{Perm }X = 0$' /></li>
            <li><Tex expr='$\text{Perm }X(1;1) = 0$' /></li>
            <li><Tex expr='$\text{Perm }X(4;4) = 0$' /></li>
            <li><Tex expr='$\text{Perm }X(1,4;1,4) = 0$' /></li>
            <li><Tex expr='$\text{Perm }X(1;4) = \text{Perm }X(4;1) = \text{nonzero constant }(=4)$' /></li>
          </ol>
          [N.R. The given X is about the simplest possible among all matrices with properties (i)-(v) if <Tex expr='$\{1, 4\}$' /> is
          taken to denote an arbitrary pair of indices, and any nonzero constant is allowed in (v). This can be seen from the following easily proved facts:
          (a) any such matrix has to be at least <Tex expr='$4 \times 4$' />, and if it is <Tex expr='$4 \times 4$' /> then (b) it is not
          symmetric and (c) at least two entries are greater than one in magnitude. Also (d) no matrix can have the same set of properties for
          the determinant, and hence if it has them for the permanent the constant in (v) must be even.]
          <br />
          {tab}Let a route in the graph <Tex expr='$f(F)$' /> be the set of all cycle covers that have the same set of edges outside the junctions.
          A route is good if every junction and internal junction is entered exactly once the left exactly once and at the opposite end. Routes may
          fail to be good either because (a) some junction or internal junction is not entered and left, or (b) because it is entered and left at the same end, or (c)
          because it is entered twice and left twice. By virtue of conditions (i) for (a), (ii) and (iii) for (b) and (iv) f or ( c ) an y route that is not good
          contributes zero to the permanent. Condition (v) ensures that any good route contributes exactly <Tex expr='$4^{t(F)}$' />.
          <br />
          {tab}It is clear that in any track <Tex expr='$T_k$' /> of any good route either all junctions on the left are
          “picked up” by the track and all the ones on the right by interchanges, or vice versa (corresponding to {x_k} and
          <Tex expr='$\bar{x}_k$' /> respectively). The interchanges are so constructed that any route can pick up any subset of them, except for the whole
          set itself. Furthermore it can do so in exactly one way for each subset. Thus if for some {R_i} at least one of the junctions is
          picked up by the tracks, then all the remaining ones will be picked up by {R_i} in the unique good route available.
          <br />
          {tab}Using the obvious correspondence between good routes and assignments of truth values, we conclude that there is a one-one correspondence
          between good routes in the graph, each of which contributes <Tex expr='$4^{t(F)}$' /> to the permanent, and satisfying assignment
          of <Tex expr='$F$' />. The result follows.
        </ProofContent>
      </Proof>

      <Proof title='Proof of Lemma 3.3.'>
        To obtain <Tex expr='$h(A)$' /> we replace each edge of weight <Tex expr='$k > 1$' /> in {A} by a subgraph. The subgraph
        is illustrated in Fig. 2 for the case <Tex expr='$k = 5$' />. It replaces an edge of weight 5 from node {x} to node {y}.
        All the other nodes shown are new additions to {A}.
        <ProofContent>
          Now if <Tex expr='$(x,y)$' /> is not covered by a cycle in {A} then there is just one way to cover the corresponding new nodes
          in <Tex expr='$h(A)$' />. On the other hand, if <Tex expr='$(x,y)$' />  is covered by a cycle in {A}, then so must be also the chain
          of these edges from {x} to {y} in <Tex expr='$h(A)$' />. Then there are five ways of covering the remainder, each
          corresponding to the inclusion of a different self-loop.
          <br />
          <img src={fig2} />
          {tab}To obtain our main positive result we generalise the Gaussian elimination technique.
        </ProofContent>
      </Proof>
    </div>
  )
}

export default Demo
