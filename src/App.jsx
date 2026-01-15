import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SoftReservePage from './pages/SoftReservePage';
import ProductsPage from './pages/ProductsPage';
import HorecaPosPage from './pages/HorecaPosPage';
import SoftBeautyPage from './pages/SoftBeautyPage';
import QrMenuPage from './pages/QrMenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/urunlerimiz" element={<ProductsPage />} />
        <Route path="/hizmetler" element={<ServicesPage />} />
        <Route path="/softreserve" element={<SoftReservePage />} />
        <Route path="/horecapos" element={<HorecaPosPage />} />
        <Route path="/softbeauty" element={<SoftBeautyPage />} />
        <Route path="/qrmenu" element={<QrMenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;
