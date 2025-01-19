// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import App from './App'; // Ensure the correct relative path

const root = ReactDOM.createRoot(document.getElementById('root')); // Make sure "root" exists in the HTML
root.render(<App />);
