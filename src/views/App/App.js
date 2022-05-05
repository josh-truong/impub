import React from 'react';
import { Demo } from '../index.js';

function App() {
  const tab = <span style={{ padding: "0 15px" }} />
  return (
    <div className="container">
      <h5 style={{marginBottom:'20px'}}>
        Contributors
        <h6>
        {tab}Joshua Grochow {tab}Joshua Truong
        </h6>
      </h5>
      <Demo />
    </div>
  );
}

export default App;

