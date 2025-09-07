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
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import ViewAllDoctors from './Pages/Admin/Doctors/ViewAllDoctors';
import ViewAllReceptionists from './Pages/Admin/Receptionists/ViewAllReceptionists';
import ViewAllNurses from './Pages/Admin/Nurse/ViewAllNurses';

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
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/doctors" element={<ViewAllDoctors />} />
        <Route path="/admin/receptionists" element={<ViewAllReceptionists />} />
        <Route path="/admin/nurses" element={<ViewAllNurses />} /> //add the Nurse in the sidebar.... 
      </Routes>
    </Router>
  ); 
}

export default App;
