import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from './error';
import reportWebVitals from './reportWebVitals';
import { Max1, Max2 } from './fragment';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Error />
    <Max1 />
    <Max2/>
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
