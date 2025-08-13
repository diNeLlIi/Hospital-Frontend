import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import DashboardReceptionist from './Pages/Dashboard/DashboardReceptionist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receptionist-dashboard" element={<DashboardReceptionist />} />
      </Routes>
    </Router>
  );
}

export default App;