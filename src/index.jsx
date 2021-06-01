import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfProjectContext } from './contexts/ConfProject';

ReactDOM.render(
  <ConfProjectContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfProjectContext>,
  document.getElementById('root')
);
