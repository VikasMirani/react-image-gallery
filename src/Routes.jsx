import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Favorites from './components/pages/Favorites';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default AppRoutes;