import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import ReceptionistDashboard from './Pages/ReceptionistDashboard/ReceptionistDashboard';
import AddPatient from './Pages/AddPatient/AddPatient';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receptionist-dashboard" element={<ReceptionistDashboard />} />
        <Route path="/add-patients" element={<AddPatient />} />
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  ); 
}

export default App;