import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/Login/Login';
import Login from './Pages/Login/Login';

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;  // <---- Make sure this is here
