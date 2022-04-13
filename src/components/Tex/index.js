import React, { useEffect } from 'react';

const Tex = (props) => {
  let node = React.createRef();
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
