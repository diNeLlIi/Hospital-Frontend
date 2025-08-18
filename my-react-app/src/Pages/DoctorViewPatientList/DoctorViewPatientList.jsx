// src/Pages/DoctorViewPatientDetails/DoctorViewPatientList.jsx
import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './DoctorViewPatientList.css';

const patients = [
  { id: 'P068', name: 'Kasuni Fernando' },
  { id: 'P069', name: 'Nimal Fernando' },
  { id: 'P070', name: 'Roshini Silva' },
  { id: 'P071', name: 'Ashan Jayathilaka' },
  { id: 'P072', name: 'Janith Liyanage' },
  { id: 'P073', name: 'Suresh Sampath' },
  { id: 'P074', name: 'Punura Perera' },
  { id: 'P075', name: 'Lithil Silva' },
  { id: 'P076', name: 'Suvi Gamage' },
  { id: 'P077', name: 'Rajeeva Silva' },
];

const DoctorViewPatientList = () => {
  return (
    <Layout pageTitle="Patient List" pageNumber="99">
      <div className="patient-list-container">
        <div className="patient-list-card">
          <h2 className="section-title">Patient List - Dr. Nimal Perera</h2>

          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient No.</th>
                  <th>Patient Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.name}</td>
                    <td>
                      <button className="action-btn edit">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorViewPatientList;
