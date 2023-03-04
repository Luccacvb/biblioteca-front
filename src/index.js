import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Livro from './Livro/livro';
import Cliente from './Cliente/cliente';
import 'animate.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route key="aluguel" path="/aluguel" element={<App />} />
        <Route key="livro" path="/livro" element={<Livro />} />
        <Route key="cliente" path="/cliente" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

