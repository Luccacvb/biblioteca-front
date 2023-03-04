import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Aluguel from './Aluguel/Aluguel';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Livro from './Livro/Livro';
import Cliente from './Cliente/Cliente';
import 'animate.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route key="aluguel" path="/aluguel" element={<Aluguel />} />
        <Route key="livro" path="/livro" element={<Livro />} />
        <Route key="cliente" path="/cliente" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

