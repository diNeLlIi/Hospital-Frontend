import React, { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    bloodType: '',
    allergies: '',
    medicalHistory: '',
    emergencyContactName: '',
    emergencyContactNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert('Registration completed successfully!');
  };

  return (
    <Layout pageTitle="Doctor Registration" pageNumber="99">
      <div className="registration-form">
        <div className="form-grid">
          {/* Personal Information */}
          <div className="form-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dateOfBirth">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="form-section">
            <h2 className="section-title">Address Information</h2>
            <div className="form-group">
              <label htmlFor="streetAddress">Street Address *</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="Street Address"
                value={formData.streetAddress}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code *</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-grid">
          {/* Medical Information */}
          <div className="form-section">
            <h2 className="section-title">Medical Information</h2>
            <div className="form-group">
              <label htmlFor="bloodType">Blood Type</label>
              <select
                id="bloodType"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleInputChange}
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="allergies">Known Allergies</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                placeholder="Enter Known Allergies (Optional)"
                value={formData.allergies}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="medicalHistory">Medical History</label>
              <textarea
                id="medicalHistory"
                name="medicalHistory"
                placeholder="Enter medical history, current medications, or other relevant information (Optional / max 500 characters)"
                value={formData.medicalHistory}
                onChange={handleInputChange}
                maxLength="500"
                rows="4"
              />
              <div className="character-count">
                {formData.medicalHistory.length}/500 characters
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="form-section">
            <h2 className="section-title">Emergency Contact</h2>
            <div className="form-group">
              <label htmlFor="emergencyContactName">Contact Name *</label>
              <input
                type="text"
                id="emergencyContactName"
                name="emergencyContactName"
                placeholder="Emergency Contact Name"
                value={formData.emergencyContactName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emergencyContactNumber">Contact Number *</label>
              <input
                type="tel"
                id="emergencyContactNumber"
                name="emergencyContactNumber"
                placeholder="Emergency Contact Number"
                value={formData.emergencyContactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="submit-button" onClick={handleSubmit}>
            Complete Registration
          </button>
        </div>
      </div>

      <style jsx>{`
        .registration-form {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          max-width: 100%;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          font-weight: 500;
          color: #2d3748;
          font-size: 0.875rem;
        }

        input, select, textarea {
          padding: 0.75rem;
          border: 1px solid #cbd5e0;
          border-radius: 6px;
          font-size: 0.875rem;
          transition: border-color 0.2s;
          font-family: inherit;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }

        input::placeholder, textarea::placeholder {
          color: #a0aec0;
        }

        select {
          cursor: pointer;
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }

        .character-count {
          font-size: 0.75rem;
          color: #718096;
          text-align: right;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
        }

        .submit-button {
          background-color: #3182ce;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
          font-size: 0.875rem;
        }

        .submit-button:hover {
          background-color: #2c5aa0;
        }

        .submit-button:active {
          background-color: #2a4d8a;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .registration-form {
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .registration-form {
            padding: 1rem;
          }
          
          .form-grid {
            gap: 1.5rem;
          }
          
          .section-title {
            font-size: 1.125rem;
          }
          
          .submit-button {
            width: 100%;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .form-actions {
            padding-top: 1.5rem;
          }
          
          input, select, textarea {
            padding: 0.875rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default DoctorRegistration;