import React, { useEffect } from 'react';

/**
 * Tex Component uses MathJax CDN to render Latex expressions.
 * <br/> - MathJax.Hub.Queue is needed to re-render expressions
 * <br/> - MathJax.Hub.Config configurates MathJax.
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
 */

const Tex = (props) => {
  async function renderMath() {
    window.MathJax.Hub.Queue([
      "Typeset",
      window.MathJax.Hub
    ]);
    window.MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']]
      }
    });
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
