import React, { useEffect } from 'react';

const Latex = (props) => {
  let node = React.createRef();
  useEffect(() => {
    renderMath();
  });

  const renderMath = () => {
    window.MathJax.Hub.Queue([
      "Typeset",
      window.MathJax.Hub,
      node.current
    ]);
    window.MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']]
      }
    });
  }
  
  return (
    <>
      {props.expr ? props.expr : props.children}
    </>
  )
}

export default Latex
