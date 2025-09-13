// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';

import AddPatient from './Pages/RoleReceptionist/AddPatient/AddPatient';
import Appiointments from './Pages/RoleReceptionist/Appointment/Appointment';
import ReceptionistDashboard from './Pages/RoleReceptionist/ReceptionistDashboard/ReceptionistDashboard';
import ViewAppointment from './Pages/RoleReceptionist/ViewAppointment/ViewAppointment';

import DoctorDashboard from './Pages/RoleDoctor/DoctorDashboard/DoctorDashboard';
import DoctorDateSelection from './Pages/RoleDoctor/DoctorDateSelection/DoctorDateSelection';
import DoctorViewPatientDetails from './Pages/RoleDoctor/DoctorViewPatientDetails/DoctorViewPatientDetails';
import DoctorViewPatientList from './Pages/RoleDoctor/DoctorViewPatientList/DoctorViewPatientList';

import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import ViewAllDoctors from './Pages/Admin/Doctors/ViewAllDoctors';
import ViewAllNurses from './Pages/Admin/Nurse/ViewAllNurses';
import ViewAllReceptionists from './Pages/Admin/Receptionists/ViewAllReceptionists';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/receptionist-dashboard" element={<ReceptionistDashboard />} />
        <Route path ="/add-patients" element={<AddPatient />} />
        <Route path="/appointments" element={<Appiointments />} />
        <Route path="/view-appointment" element={<ViewAppointment />} />

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
