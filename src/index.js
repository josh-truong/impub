import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import RenderLatex from './components/Latex/RenderLatex';

ReactDOM.render(
  <React.StrictMode>
      <RenderLatex>
      <App />
    </RenderLatex>
  </React.StrictMode>,
  document.getElementById('root')
);