// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';

import ReceptionistDashboard from './Pages/RoleReceptionist/ReceptionistDashboard/ReceptionistDashboard';
import AddPatient from './Pages/RoleReceptionist/AddPatient/AddPatient';
import Appiointments from './Pages/RoleReceptionist/Appointment/Appointment';
import ViewAppointment from './Pages/RoleReceptionist/ViewAppointment/ViewAppointment';
import PatientRegistration from './Pages/RoleReceptionist/PatientRegistration/PatientRegistration';
import PatientList from './Pages/RoleReceptionist/PatientList/PatientList.tsx'

import DoctorDashboard from './Pages/RoleDoctor/DoctorDashboard/DoctorDashboard';
import DoctorDateSelection from './Pages/RoleDoctor/DoctorDateSelection/DoctorDateSelection';
import DoctorViewPatientDetails from './Pages/RoleDoctor/DoctorViewPatientDetails/DoctorViewPatientDetails';
import DoctorViewPatientList from './Pages/RoleDoctor/DoctorViewPatientList/DoctorViewPatientList';

import ViewAllDoctors from './Pages/Admin/Doctors/ViewAllDoctors';
import ViewAllReceptionists from './Pages/Admin/Receptionists/ViewAllReceptionists';
import ViewAllNurses from './Pages/Admin/Nurse/ViewAllNurses';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receptionist-dashboard" element={<ReceptionistDashboard />} />
        <Route path ="/add-patients" element={<AddPatient />} />
        <Route path="/appointments" element={<Appiointments />} />
        <Route path="/view-appointment" element={<ViewAppointment />} />
        <Route path="/patient-registration" element={<PatientRegistration />} />
        <Route path="/patient-list" element={<PatientList/>} />

        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-date-selection" element={<DoctorDateSelection />} />
        <Route path="/doctor-view-patient-details" element={<DoctorViewPatientDetails />} />
        <Route path="/doctor-view-patient-list" element={<DoctorViewPatientList />} />
        
        <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/doctors" element={<ViewAllDoctors />} />
        <Route path="/admin/receptionists" element={<ViewAllReceptionists />} />
        <Route path="/admin/nurses" element={<ViewAllNurses />} />
      </Routes>
    </Router>
  ); 
}

export default App;
