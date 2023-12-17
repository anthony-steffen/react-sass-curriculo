import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import './styles/main.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/react-sass-curriculo" element={ <App /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
