import React from 'react';
import ReactDOM from 'react-dom/client';
import './main-style.scss';
import './min576.scss';
import './min768.scss';
import './min992.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
