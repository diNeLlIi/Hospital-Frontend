// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import ReceptionistDashboard from './Pages/ReceptionistDashboard/ReceptionistDashboard';
import DoctorDashboard from './Pages/DoctorDashboard/DoctorDashboard';
import DoctorDateSelection from './Pages/DoctorDateSelection/DoctorDateSelection';
import DoctorViewPatientDetails from './Pages/DoctorViewPatientDetails/DoctorViewPatientDetails';
import DoctorViewPatientList from './Pages/DoctorViewPatientList/DoctorViewPatientList';
import AddPatient from './Pages/AddPatient/AddPatient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receptionist-dashboard" element={<ReceptionistDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-date-selection" element={<DoctorDateSelection />} />
        <Route path="/doctor-view-patient-details" element={<DoctorViewPatientDetails />} />
        <Route path="/doctor-view-patient-list" element={<DoctorViewPatientList />} />
        <Route path="/add-patients" element={<AddPatient />} />
      </Routes>
    </Router>
  );
}

export default App;
