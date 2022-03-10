import React from 'react'

import {Corollary, Definition, Example, Lemma, Notation, Observation,
        ParentSection, Proposition, Ref, Remark, Theorem}
    from '../../components/DefineSection/DefineSection'

import Latex from "../../components/Latex/Latex"

const DisplayDefRef = () => {
  return (
    <div>
        <ParentSection>
            {/* <Corollary name="Corollary">3-Tensor Isomorphism reduces to Symmetric Matrix Space Isometry</Corollary>
            <Definition name="Definition">(Constructive version of Baer’s correspondence for matrix groups).</Definition>
            <Example name="Example">Example <Latex expr="$4 \cdot 4$"/> </Example>
            <Lemma name="Lemma">Lemma</Lemma>
            <Notation name="Notation">Notation</Notation>
            <Observation name="Observation">Observation</Observation>
            <Proposition name="Proposition">Proposition</Proposition>
            <Remark name="Remark">Remark</Remark>
            <Theorem name="Theorem">Theorem</Theorem>
            
            <Ref name="Corollary"/>
            <Ref name="Example"/> */}

            <Proposition id="7.3">
              3-Tensor Isomorphism reduces to Alternating Matrix Space Isometry. Symbolically, isomorphism in U ⊗ V ⊗ W reduces to isomorphism in V ′ ⊗ V ′ ⊗ W ′
              (or even to∧2 V ′ ⊗ W ), where ℓ = dim U ≤ n = dim V and m = dim W , dim V ′ = ℓ + 7n + 3 and dim W ′ = m + ℓ(2n + 1) + n(4n + 2).
            </Proposition>
            <Lemma id="7.5">
            (Constructive version of Baer’s correspondence for matrix groups). Let p be an odd
            prime. Over the finite field F = Fpe , Alternating Matrix Space Isometry is equivalent to
            Group Isomorphism for matrix groups over F that are p-groups of class 2 and exponent p. More
            precisely, there are functions computable in time poly(n, m, log |F|):
            • G : Λ(n, F)m → M(n + m + 1, F)n+m and
            • Alt : M(n, F)m → Λ(m, F)O(m2 )
            such that: (1) for an alternating bilinear map A, the group generated by G(A) is the Baer group
            corresponding to A, (2) G and Alt are mutually inverse, in the sense that the group generated by
            G(Alt(M1, . . . , Mm)) is isomorphic to the group generated by M1, . . . , Mm, and conversely Alt(G(A))
            is pseudo-isometric to A.
            </Lemma>
            
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <i>Proof.</i> Combine Proposition <Ref id="7.3"/> with Lemma <Ref id="7.5"/>. Note that for this direction
            of the reduction, we only need the function <Latex expr="$G$"/> from Lemma <Ref id="7.5"/>, which can be computed
            in time <Latex expr="$poly(n,\log p)$"/>.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        </ParentSection>
    </div>
  )
}

export default DisplayDefRef
