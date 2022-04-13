import React from 'react'
import Tex from "../../components/Tex"
import { Proof, ProofHeader, ProofContent, ProofSubsection } from '../../components/Proof'
import {
    Corollary, Definition, Example, Lemma, Notation,
    Observation, Proposition, Ref, Remark, Theorem
}
    from '../../components/MathTerm'
import { MathTex, Result, Scope, Var } from '../../components/Calculator'

const Features = () => {
    return (
        <div style={{ marginTop: '5%' }}>
            [MathTerm Component]
            <br />
            &lt;Proposition id='7.3'&gt;<br />
            <Proposition id="7.3">Content</Proposition>
            &lt;/Proposition&gt;
            <br />&lt;Lemma id='7.5'&gt;<br />
            <Lemma id="7.5">Content</Lemma>
            &lt;/Lemma&gt;
            <hr />
            [Proof Component]
            <br />&lt;Proof&gt;
            <Proof>
                &lt;ProofHeader&gt;
                <ProofHeader>&emsp;Content</ProofHeader>
                &lt;/ProofHeader&gt;<br />
                &lt;ProofSubsection&gt;<br />
                <ProofSubsection>
                    <ProofHeader>
                        &lt;ProofHeader&gt;<br />
                        &emsp;&emsp;&emsp;&emsp;Content<br />
                        &emsp;&emsp;&emsp;&lt;/ProofHeader&gt;<br />
                    </ProofHeader>
                    &emsp;&lt;ProofContent&gt;<br />
                    <ProofContent>
                        &emsp;&emsp;&lt;Tex expr='Tex Expression'/&gt;<br /><br />
                        &emsp;&emsp;[Tex - Inline Mode] -> <Tex expr="$k \cdot n + 1$" />
                        <br />&emsp;&emsp;&emsp;or<br />
                        &emsp;&emsp;[Tex - Display Mode] -> <Tex expr="$$k \cdot n + 1$$" />

                    </ProofContent>
                    &emsp;&lt;/ProofContent&gt;<br />
                    <ProofContent>
                        <ProofSubsection>
                            <ProofHeader>
                                &lt;ProofHeader&gt;<br />
                                &emsp;&emsp;&emsp;&emsp;Content<br />
                                &emsp;&emsp;&emsp;&lt;/ProofHeader&gt;<br />
                            </ProofHeader>
                            &lt;ProofContent&gt;<br />
                            <ProofContent>
                                &emsp;Refer to MathTerm Components using &lt;Ref id="7.3" /&gt; <br />
                                &emsp;Proposition -> <Ref id="7.3" /><br />
                                &emsp;lemma -> <Ref id="7.5" /><br />
                                &emsp;Invalid/Undeclared MathTerm -> <Ref id="7.7" /><br />
                            </ProofContent>
                            &lt;/ProofContent&gt;<br />
                        </ProofSubsection>
                    </ProofContent>
                </ProofSubsection>
                &lt;/ProofSubsection&gt;<br />
                &lt;/Proof&gt;
            </Proof>

            <Proof>
                &lt;ProofHeader&gt;
                <ProofHeader>&emsp;Using the Calculator Component</ProofHeader>
                &lt;/ProofHeader&gt;<br />
                &lt;ProofSubsection&gt;<br />
                <ProofContent>
                    Content
                </ProofContent>
                &emsp;&lt;/ProofContent&gt;<br />
                &lt;/Proof&gt;
            </Proof>
        </div>
    )
}

export default Features
