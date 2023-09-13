import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css';  // Assuming you might have a global stylesheet

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
