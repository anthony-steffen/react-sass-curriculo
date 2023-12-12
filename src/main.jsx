import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import './styles/main.sass';
import Curriculo from './pages/Curriculo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/react-sass-curriculo" element={ <App /> } />
        <Route path="/react-sass-curriculo/download" element={ <Curriculo /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
