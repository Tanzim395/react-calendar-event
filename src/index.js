import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CalenderContextProvider from './context/CalenderContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CalenderContextProvider>
    <App />
  </CalenderContextProvider>
);

