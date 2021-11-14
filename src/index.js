import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './index.css';
import Navigation from './navigation';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App>
        <Navigation />
      </App>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

