import React, { useEffect } from 'react';

/**
 * Tex Component uses MathJax CDN to render Latex expressions.
 * <br/> - MathJax.Hub.Queue is needed to re-render expressions
 * <br/> - MathJax.Hub.Config configurates MathJax.
 * 
 * Additionally, you can use backticks for inline rendering
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * 
 * @property {String} props.expr -(Explicit usage) Tex Expression to render using MathJax
 * @property {Elements} props.children - (Implicit usage) Tex Expression to render using MathJax
 * 
 * @returns {React_Elements} Returns React Element either props.expr or props.children
 * 
 * @example
 * <Tex expr='MathJax Valid Expressions' />
 * <Tex>MathJax Valid Expressions</Tex>
 * `Math Expressions` - Is not valid if you need to use {}
 */

const Tex = (props) => {
  async function renderMath() {
    window.MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    });
    window.MathJax.Hub.Register.StartupHook("End", function () {
      window.MathJax.Hub.Queue([
        "Typeset",
        window.MathJax.Hub,
        "TFS"]);

    });


    // window.MathJax.Hub.Queue([
    //   "Typeset",
    //   window.MathJax.Hub
    // ]);
    // window.MathJax.Hub.Config({
    //   tex2jax: {
    //     inlineMath: [['$','$'], ['\\(','\\)']]
    //   }
    // });
  }

  useEffect(() => {
    renderMath();
  });

  return (
    <>
      {props.expr ? props.expr : props.children}
    </>
  )
}

export default Tex
