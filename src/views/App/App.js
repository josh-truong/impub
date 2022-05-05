import React from 'react';
import { Demo } from '../index.js';

function App() {
  const tab = <span style={{ padding: "0 15px" }} />
  return (
    <div className="container">
      <div className='row' style={{ marginBottom: '60px' }}>
        <div className='col'>
          <h5>
            Contributors
          </h5>
          {tab}Joshua Grochow {tab}Joshua Truong
        </div>
        <div className='col' style={{ textAlign: 'right' }}>
          <a href='https://github.com/josh-truong/impub'>Github Source</a>
        </div>
      </div>
      <Demo />
    </div>
  );
}

export default App;

