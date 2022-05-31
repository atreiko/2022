import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './pages/App/App';
import './index.css';
// import { App } from './pages';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
