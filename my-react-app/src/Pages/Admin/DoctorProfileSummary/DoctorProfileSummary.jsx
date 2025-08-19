import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './DoctorProfileSummary.css';

const DoctorProfileSummary = () => {
  const today = new Date(2025, 7, 17, 9, 32); // 09:32 AM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });

  const doctorData = {
    name: 'Dr. Nimal Perera',
    firstName: 'Nimal',
    lastName: 'Perera',
    nationalId: '930345678V',
    dateOfBirth: '1993/01/07',
    gender: 'Male',
    email: 'nimalperera@gmail.com',
    contactNumber: '(+94) 77 346 5467',
    address: '32, Kew Road, Rajagiriya.',
    bloodGroup: 'A+',
    medicalHistory: '-',
    medicalDegree: 'MBBS',
    specialization: 'Cardiology',
    medicalSchool: 'University of Colombo Faculty of Medicine',
    yearOfGraduation: '2014',
    medicalLicenseNumber: 'SLMC-12345',
    licenseExpiryDate: '2035-05-14',
    medicalLicense: 'license452178.doc',
    currentHospital: 'Gampaha General Hospital',
    designation: 'Consultant Cardiologist',
    yearsOfExperience: '15 years',
    previousHospitals: 'Kandy General Hospital',
  };

  const handleEdit = () => {
    alert('Edit Doctor Details');
    // Navigate to edit form
  };

  const handleDelete = () => {
    alert('Delete Doctor?');
    // Delete logic
  };

  return (
    <Layout pageTitle="Dr. Nimal Perera" pageNumber="11">
      <div className="profile-container">
        <div className="greeting-section">Good Morning, Admin - {time}</div>
        <div className="profile-section">
          <h3>Personal Information</h3>
          <div className="form-grid">
            <label>First Name</label>
            <p>{doctorData.firstName}</p>
            <label>Last Name</label>
            <p>{doctorData.lastName}</p>
            <label>National ID / Passport No.</label>
            <p>{doctorData.nationalId}</p>
            <label>Date of Birth</label>
            <p>{doctorData.dateOfBirth}</p>
            <label>Gender</label>
            <p>{doctorData.gender}</p>
            <label>Email Address</label>
            <p>{doctorData.email}</p>
            <label>Contact Number</label>
            <p>{doctorData.contactNumber}</p>
            <label>Address</label>
            <p>{doctorData.address}</p>
          </div>
        </div>
        <div className="profile-section">
          <h3>Educational (Medical) Qualifications</h3>
          <div className="form-grid">
            <label>Medical Degree</label>
            <p>{doctorData.medicalDegree}</p>
            <label>Specialization</label>
            <p>{doctorData.specialization}</p>
            <label>Medical School / University</label>
            <p>{doctorData.medicalSchool}</p>
            <label>Year of Graduation</label>
            <p>{doctorData.yearOfGraduation}</p>
            <label>Medical License Number</label>
            <p>{doctorData.medicalLicenseNumber}</p>
            <label>License Expiry Date</label>
            <p>{doctorData.licenseExpiryDate}</p>
            <label>Medical License</label>
            <p>{doctorData.medicalLicense}</p>
          </div>
        </div>
        <div className="profile-section">
          <h3>Medical Information</h3>
          <div className="form-grid">
            <label>Blood Group</label>
            <p>{doctorData.bloodGroup}</p>
            <label>Medical History</label>
            <p>{doctorData.medicalHistory}</p>
          </div>
        </div>
        <div className="profile-section">
          <h3>Work Information</h3>
          <div className="form-grid">
            <label>Current Hospital</label>
            <p>{doctorData.currentHospital}</p>
            <label>Designation</label>
            <p>{doctorData.designation}</p>
            <label>Years of Experience</label>
            <p>{doctorData.yearsOfExperience}</p>
            <label>Previous Hospitals / Workplaces</label>
            <p>{doctorData.previousHospitals}</p>
          </div>
        </div>
        <div className="action-buttons">
          <button className="action-btn edit" onClick={handleEdit}>Edit</button>
          <button className="action-btn delete" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorProfileSummary;
