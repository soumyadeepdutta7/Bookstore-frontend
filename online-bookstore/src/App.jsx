import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
};

export default App;
