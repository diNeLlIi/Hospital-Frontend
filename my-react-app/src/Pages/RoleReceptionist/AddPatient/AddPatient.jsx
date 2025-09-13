import React, { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';

const AddPatient = () => {
  const [formData, setFormData] = useState({
    fullName: 'Janith Liyanage',
    contactNumber: '0762206157',
    gender: 'Male',
    nic: '200023900145',
    appointmentType: 'General Checkup',
    appointmentTime: '11.00 am',
    patientNumber: '06'
  });

  const doctorName = "Dr. Nimal Perera";
  const appointmentDate = "06 June 2025";
  const totalPrice = "LKR 2,400.00";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    console.log("Appointment Confirmed:", formData);
    alert("Appointment confirmed successfully!");
  };

  const handleCancel = () => {
    console.log("Appointment Cancelled");
    alert("Appointment cancelled!");
  };

  return (
    <Layout pageTitle="Add Patient Appointment" pageNumber="100">
      <div className="appointments-container">
        {/* Left section - Form */}
        <div className="patient-info">
          <h2>Patient Info</h2>
          <div className="form">
            <div className="form-group">
              <label>Patient Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Patient Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>NIC / ID Number</label>
              <input
                type="text"
                name="nic"
                value={formData.nic}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Appointment Type</label>
              <select
                name="appointmentType"
                value={formData.appointmentType}
                onChange={handleChange}
              >
                <option>General Checkup</option>
                <option>Specialist Consultation</option>
                <option>Follow-up</option>
                <option>Emergency</option>
              </select>
            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input
                type="text"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Patient Number</label>
              <input
                type="text"
                name="patientNumber"
                value={formData.patientNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-buttons">
              <button type="button" className="confirm-btn" onClick={handleConfirm}>
                Confirm
              </button>
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Right section - Summary */}
        <div className="appointment-summary">
          <h2>Summary</h2>
          <div className="summary-item">
            <strong>Doctor Name</strong>
            <span>{doctorName}</span>
          </div>
          <div className="summary-item">
            <strong>Patient Name</strong>
            <span>{formData.fullName}</span>
          </div>
          <div className="summary-item">
            <strong>Appointment Time</strong>
            <span>{formData.appointmentTime}</span>
          </div>
          <div className="summary-item">
            <strong>Appointment Date</strong>
            <span>{appointmentDate}</span>
          </div>
          <div className="summary-item">
            <strong>Appointment Number</strong>
            <span>{formData.patientNumber}</span>
          </div>
          <div className="summary-item total-price">
            <strong>Total Price</strong>
            <span className="price">{totalPrice}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .appointments-container {
          display: flex;
          gap: 2rem;
          padding: 2rem;
          min-height: calc(100vh - 140px);
        }

        .patient-info,
        .appointment-summary {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          height: fit-content;
        }

        .patient-info {
          flex: 2;
        }

        .appointment-summary {
          flex: 1;
          position: sticky;
          top: 2rem;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #2d3748;
          font-size: 1.5rem;
          font-weight: 600;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        .form-group label {
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        input,
        select {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 0.875rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: inherit;
        }

        input:focus,
        select:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }

        select {
          cursor: pointer;
          background-color: white;
        }

        .form-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }

        .confirm-btn {
          background-color: #0074B7;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          flex: 1;
        }

        .confirm-btn:hover {
          background-color: #005a8b;
        }

        .cancel-btn {
          background-color: #E53935;
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          flex: 1;
        }

        .cancel-btn:hover {
          background-color: #c62828;
        }

        .summary-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background-color: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #3182ce;
        }

        .summary-item strong {
          color: #374151;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .summary-item span {
          color: #1f2937;
          font-size: 1rem;
          font-weight: 500;
        }

        .total-price {
          border-left-color: #10b981;
          background-color: #ecfdf5;
        }

        .price {
          font-size: 1.25rem !important;
          font-weight: 600 !important;
          color: #059669 !important;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .appointments-container {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }

          .patient-info,
          .appointment-summary {
            flex: none;
          }

          .appointment-summary {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .appointments-container {
            padding: 1rem;
            gap: 1rem;
          }

          .patient-info,
          .appointment-summary {
            padding: 1.5rem;
          }

          .form-buttons {
            flex-direction: column;
          }

          .confirm-btn,
          .cancel-btn {
            flex: none;
            padding: 1rem;
          }

          h2 {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .appointments-container {
            padding: 0.5rem;
          }

          .patient-info,
          .appointment-summary {
            padding: 1rem;
          }

          .summary-item {
            padding: 0.75rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default AddPatient;