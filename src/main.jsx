import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroVendaPage from './pages/RegistroVendaPage';
import RegistroCortesiaPage from './pages/RegistroCortesiaPage';
import CheckInPage from './pages/CheckInPage';
import RelatorioPage from './pages/RelatorioPage';
import MenuPrincipal from './pages/MenuPrincipal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/registro" element={<RegistroVendaPage />} />
        <Route path="/cortesia" element={<RegistroCortesiaPage />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/relatorios" element={<RelatorioPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);