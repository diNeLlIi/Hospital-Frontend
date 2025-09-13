import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../Components/Layout/Layout';
import './PatientList.css'; 

const PatientList = () => {
  const navigate = useNavigate();
  
  const [patients] = useState([
    { id: 'P068', name: 'Kasuni Fernando' },
    { id: 'P069', name: 'Nimal Fernando' },
    { id: 'P070', name: 'Roshini Silva' },
    { id: 'P071', name: 'Ashan Jayathilaka' },
    { id: 'P072', name: 'Janith Liyanage' },
    { id: 'P073', name: 'Suresh Sampath' },
    { id: 'P074', name: 'Punura Perera' },
    { id: 'P075', name: 'Lithil Silva' },
    { id: 'P076', name: 'Suvi Gamage' },
    { id: 'P077', name: 'Rajeeva Silva' }
  ]);

  const handleEdit = (patientId: string, patientName: string) => {
    alert(`Edit patient: ${patientName} (${patientId})`);
  };

  const handleRegisterNewPatient = () => {
    navigate('/patient-registration');
  };

  return (
    <Layout pageTitle="Patients" pageNumber="101">
      <div className="patients-container">
        {/* Header Section */}
        <div className="patients-header">
          <div className="header-left">
            <h1 className="page-title">Patient Management</h1>
          </div>
          
        </div>

        {/* Patients Table */}
        <div className="patients-table-container">
          <div className="table-wrapper">
            <table className="patients-table">
              <thead>
                <tr>
                  <th className="patient-no-col">Patient No.</th>
                  <th className="patient-name-col">Patient Name</th>
                  <th className="actions-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="patient-row">
                    <td className="patient-no">{patient.id}</td>
                    <td className="patient-name">{patient.name}</td>
                    <td className="patient-actions">
                      <button 
                        className="edit-btn"
                        onClick={() => handleEdit(patient.id, patient.name)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table Footer */}
        <div className="table-footer">
          <div className="table-info">
            <span>Showing {patients.length} patients</span>
          </div>
        </div>
      </div>
      <div className="footer-right">
            <button className="register-btn" onClick={handleRegisterNewPatient}>
              Register New Patient
            </button>
          </div>
    </Layout>
  );
};

export default PatientList;