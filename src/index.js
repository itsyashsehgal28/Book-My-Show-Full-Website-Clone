import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";
// <BrowserRouter> stores the current location in the browser's address bar using clean URLs and 
// navigates using the browser's built-in history stack.

import MovieProvider from './ContextAPI/movie.Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* strict mode in JavaScript is when it works in strict mode so that developers can easily debug their code
        since otherwise its a loosely typed language */}

    <BrowserRouter>
      {/* browser router will encapsulate all routes */}

      <MovieProvider>
        {/* wrapped whole application under context api */}
        <App />
      </MovieProvider>

    </BrowserRouter>
  </React.StrictMode>
  // helps identify errors
);