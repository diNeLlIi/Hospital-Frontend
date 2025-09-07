import React, { useState } from 'react';
import './AddPatient.css';

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
  };

  const handleCancel = () => {
    console.log("Appointment Cancelled");
  };

  return (
    <div className="appointments-container">
      {/* Left section - Form */}
      <div className="patient-info">
        <h2>Patient Info</h2>
        <form>
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
            <button type="button" className="confirm-btn" onClick={handleConfirm}>Confirm</button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>

      {/* Right section - Summary */}
      <div className="appointment-summary">
        <h2>Summary</h2>
        <p><strong>Doctor Name</strong><br />{doctorName}</p>
        <p><strong>Patient Name</strong><br />{formData.fullName}</p>
        <p><strong>Appointment Time</strong><br />{formData.appointmentTime}</p>
        <p><strong>Appointment Date</strong><br />{appointmentDate}</p>
        <p><strong>Appointment Number</strong><br />{formData.patientNumber}</p>
        <p><strong>Total Price</strong><br />{totalPrice}</p>
      </div>
    </div>
  );
};

export default AddPatient;
