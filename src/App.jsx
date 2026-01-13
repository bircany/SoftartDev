import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import SoftReservePage from './pages/SoftReservePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/projeler" element={<ProjectsPage />} />
        <Route path="/hizmetler" element={<ServicesPage />} />
        <Route path="/softreserve" element={<SoftReservePage />} />
      </Routes>
    </Router>
  );
}

export default App;
