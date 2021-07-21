import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundaries';
import 'materialize-css';


ReactDOM.render(
  <ErrorBoundry >
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);
