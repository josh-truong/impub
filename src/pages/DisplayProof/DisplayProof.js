import React from 'react';
import Latex from "../../components/Latex"
import {Proof, ProofHeader, ProofContent, ProofSubsection} from '../../components/Proof'

function DisplayProof() {
  return (
    <div>
        <Proof>
        <ProofHeader>
            Proof.
        </ProofHeader>
        <ProofSubsection>
            <ProofHeader>
                We adapt this idea to the context of 3-way arrays. Let <Latex expr="$A$"/> be an <Latex expr="$l \times n \times m$"/> 3-way array, with lateral
                slices <Latex expr="$L_{1},L_{2},...,L_{n}$"/> (each an <Latex expr="$l \times m$"/> matrix). For any vector <Latex expr="$v \in \mathbb{F}^{n}$"/>
                we get an associated lateral <Latex expr="$L_{v}$"/>, which is a linear combination of the lateral slices as given,
                namely <Latex expr="$L_{v} \mathrel{\vcenter{:}}= \sum_{j=1}^{n} v_{j}L_{j}$"/> (note that when <Latex expr="$v = \vec{e}_j$"/> is
                the <Latex expr="$j-th$"/> standard basis vector, the associated lateral matrix is indeed <Latex expr="$L_{j}$"/>). By analogy with adjacency
                matrices of graphs, <Latex expr="$L_{v}$"/> is a natural analogue of the neighborhood of a vertex in a graph. Correspondingly, we get a notion of “degree,” 
                which we may define as
            </ProofHeader>
            <ProofContent>
                <Latex expr="$$deg_{A}(v) \mathrel{\vcenter{:}}= rkL_{v} = rk(\sum_{j=1}^{n}) = \text{dim span} \{L_{v}\vec{w}:\vec{w} \in \mathbb{F}^{m}\} = \text{dim span}\{\vec{u}^{t}L_{v}:\vec{u} \in \mathbb{F}^{l}\}$$"/>
            </ProofContent>
            <ProofContent>
                The last two characterizations are analogous to the fact that the degree of a vertex <Latex expr="$v$"/> in a
                graph <Latex expr="$G$"/> may be defined as the number of “in-neighbors” (nonzero entries the corresponding row of the
                adjacency matrix) or the number of “out-neighbors” (nonzero entries in the corresponding column).
                <ProofSubsection>
                    <ProofHeader>
                        We adapt this idea to the context of 3-way arrays. Let <Latex expr="$A$"/> be an <Latex expr="$l \times n \times m$"/> 3-way array, with lateral
                        slices <Latex expr="$L_{1},L_{2},...,L_{n}$"/> (each an <Latex expr="$l \times m$"/> matrix). For any vector <Latex expr="$v \in \mathbb{F}^{n}$"/>
                        we get an associated lateral <Latex expr="$L_{v}$"/>, which is a linear combination of the lateral slices as given,
                        namely <Latex expr="$L_{v} \mathrel{\vcenter{:}}= \sum_{j=1}^{n} v_{j}L_{j}$"/> (note that when <Latex expr="$v = \vec{e}_j$"/> is
                        the <Latex expr="$j-th$"/> standard basis vector, the associated lateral matrix is indeed <Latex expr="$L_{j}$"/>). By analogy with adjacency
                        matrices of graphs, <Latex expr="$L_{v}$"/> is a natural analogue of the neighborhood of a vertex in a graph. Correspondingly, we get a notion of “degree,” 
                        which we may define as
                    </ProofHeader>
                    <ProofContent>
                        <Latex expr="$$deg_{A}(v) \mathrel{\vcenter{:}}= rkL_{v} = rk(\sum_{j=1}^{n}) = \text{dim span} \{L_{v}\vec{w}:\vec{w} \in \mathbb{F}^{m}\} = \text{dim span}\{\vec{u}^{t}L_{v}:\vec{u} \in \mathbb{F}^{l}\}$$"/>
                    </ProofContent>
                    <ProofContent>
                        The last two characterizations are analogous to the fact that the degree of a vertex <Latex expr="$v$"/> in a
                        graph <Latex expr="$G$"/> may be defined as the number of “in-neighbors” (nonzero entries the corresponding row of the
                        adjacency matrix) or the number of “out-neighbors” (nonzero entries in the corresponding column).
                    </ProofContent>
                </ProofSubsection>
            </ProofContent>
        </ProofSubsection>
        </Proof>
        <Proof>
        <ProofHeader>
            Proof.
        </ProofHeader>
        <ProofSubsection>
            <ProofHeader>
                We adapt this idea to the context of 3-way arrays. Let <Latex expr="$A$"/> be an <Latex expr="$l \times n \times m$"/> 3-way array, with lateral
                slices <Latex expr="$L_{1},L_{2},...,L_{n}$"/> (each an <Latex expr="$l \times m$"/> matrix). For any vector <Latex expr="$v \in \mathbb{F}^{n}$"/>
                we get an associated lateral <Latex expr="$L_{v}$"/>, which is a linear combination of the lateral slices as given,
                namely <Latex expr="$L_{v} \mathrel{\vcenter{:}}= \sum_{j=1}^{n} v_{j}L_{j}$"/> (note that when <Latex expr="$v = \vec{e}_j$"/> is
                the <Latex expr="$j-th$"/> standard basis vector, the associated lateral matrix is indeed <Latex expr="$L_{j}$"/>). By analogy with adjacency
                matrices of graphs, <Latex expr="$L_{v}$"/> is a natural analogue of the neighborhood of a vertex in a graph. Correspondingly, we get a notion of “degree,” 
                which we may define as
            </ProofHeader>
            <ProofContent>
                <Latex expr="$$deg_{A}(v) \mathrel{\vcenter{:}}= rkL_{v} = rk(\sum_{j=1}^{n}) = \text{dim span} \{L_{v}\vec{w}:\vec{w} \in \mathbb{F}^{m}\} = \text{dim span}\{\vec{u}^{t}L_{v}:\vec{u} \in \mathbb{F}^{l}\}$$"/>
            </ProofContent>
            <ProofContent>
                The last two characterizations are analogous to the fact that the degree of a vertex <Latex expr="$v$"/> in a
                graph <Latex expr="$G$"/> may be defined as the number of “in-neighbors” (nonzero entries the corresponding row of the
                adjacency matrix) or the number of “out-neighbors” (nonzero entries in the corresponding column).
                <ProofSubsection>
                    <ProofHeader>
                        We adapt this idea to the context of 3-way arrays. Let <Latex expr="$A$"/> be an <Latex expr="$l \times n \times m$"/> 3-way array, with lateral
                        slices <Latex expr="$L_{1},L_{2},...,L_{n}$"/> (each an <Latex expr="$l \times m$"/> matrix). For any vector <Latex expr="$v \in \mathbb{F}^{n}$"/>
                        we get an associated lateral <Latex expr="$L_{v}$"/>, which is a linear combination of the lateral slices as given,
                        namely <Latex expr="$L_{v} \mathrel{\vcenter{:}}= \sum_{j=1}^{n} v_{j}L_{j}$"/> (note that when <Latex expr="$v = \vec{e}_j$"/> is
                        the <Latex expr="$j-th$"/> standard basis vector, the associated lateral matrix is indeed <Latex expr="$L_{j}$"/>). By analogy with adjacency
                        matrices of graphs, <Latex expr="$L_{v}$"/> is a natural analogue of the neighborhood of a vertex in a graph. Correspondingly, we get a notion of “degree,” 
                        which we may define as
                    </ProofHeader>
                    <ProofContent>
                        <Latex expr="$$deg_{A}(v) \mathrel{\vcenter{:}}= rkL_{v} = rk(\sum_{j=1}^{n}) = \text{dim span} \{L_{v}\vec{w}:\vec{w} \in \mathbb{F}^{m}\} = \text{dim span}\{\vec{u}^{t}L_{v}:\vec{u} \in \mathbb{F}^{l}\}$$"/>
                    </ProofContent>
                    <ProofContent>
                        The last two characterizations are analogous to the fact that the degree of a vertex <Latex expr="$v$"/> in a
                        graph <Latex expr="$G$"/> may be defined as the number of “in-neighbors” (nonzero entries the corresponding row of the
                        adjacency matrix) or the number of “out-neighbors” (nonzero entries in the corresponding column).
                    </ProofContent>
                </ProofSubsection>
            </ProofContent>
        </ProofSubsection>
        </Proof>
    </div>
  );
}

export default DisplayProof;