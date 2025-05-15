import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Patch ResizeObserver error (Chrome dev bug)
const ignoreResizeObserverError = () => {
  const originalError = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    if (message?.toString().includes('ResizeObserver')) {
      return true; // empêche l'overlay rouge
    }
    if (originalError) return originalError(message, source, lineno, colno, error);
    return false;
  };
};

ignoreResizeObserverError();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
