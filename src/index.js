// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Import Main Application
import App from './views/App/App';
import './index.css';

// Redux Imports
import { createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './reducers'
const store = createStore(
  rootReducer, /* preloadedState */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* Redux devtools extension for browser */
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);