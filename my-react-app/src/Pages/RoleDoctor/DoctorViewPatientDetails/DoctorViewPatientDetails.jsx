// src/Pages/DoctorViewPatientDetails/DoctorViewPatientDetails.jsx
import React from "react";
import Layout from "../../../Components/Layout/Layout";
import "./DoctorViewPatientDetails.css";

const DoctorViewPatientDetails = () => {
  const patientData = {
    firstName: "Janith",
    lastName: "Liyanage",
    patientID: "P072",
    email: "janithliyanage@gmail.com",
    phone: "0762206157",
    dob: "12/06/1996",
    gender: "Male",
    address: {
      street: "No. 12, New Road",
      city: "Kelaniya",
      state: "Gampaha",
      postalCode: "11290",
    },
    medical: {
      bloodGroup: "A-",
      allergies: "No",
      history: "-",
      contactName: "Janith Liyanage",
      contactNumber: "0762206157",
    },
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
  };

  return (
    <Layout pageTitle="Patient Details" pageNumber="100">
      <div className="patient-details-page">
        <div className="patient-details-card">
          {/* Personal Info */}
          <div className="section personal-info">
            <h3>Personal Information</h3>
            <img
              src={patientData.profilePic}
              alt="Profile"
              className="profile-pic"
            />
            <p><span>First Name:</span> {patientData.firstName}</p>
            <p><span>Last Name:</span> {patientData.lastName}</p>
            <p><span>Email Address:</span> {patientData.email}</p>
            <p><span>Phone Number:</span> {patientData.phone}</p>
            <p><span>Date of Birth:</span> {patientData.dob}</p>
            <p><span>Gender:</span> {patientData.gender}</p>
          </div>

          {/* Address Info */}
          <div className="section address-info">
            <h3>Address Information</h3>
            <p><span>Street Address:</span> {patientData.address.street}</p>
            <p><span>City:</span> {patientData.address.city}</p>
            <p><span>State:</span> {patientData.address.state}</p>
            <p><span>Postal Code:</span> {patientData.address.postalCode}</p>
          </div>

          {/* Medical Info */}
          <div className="section medical-info">
            <h3>Medical Information</h3>
            <p><span>Blood Group:</span> {patientData.medical.bloodGroup}</p>
            <p><span>Allergies:</span> {patientData.medical.allergies}</p>
            <p><span>Medical History:</span> {patientData.medical.history}</p>
            <br></br>
            <h3>Emergency Contact Information</h3>
            <p><span>Contact Name:</span> {patientData.medical.contactName}</p>
            <p><span>Contact Number:</span> {patientData.medical.contactNumber}</p>
          </div>
          
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </Layout>
  );
};

export default DoctorViewPatientDetails;
