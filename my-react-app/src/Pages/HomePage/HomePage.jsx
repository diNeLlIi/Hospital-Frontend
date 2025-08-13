import React from "react";
import "./HomePage.css";
import logoImage from '../../Components/Assets/logo.png';

const HospitalLogin = () => {
  return (
    <div className="hospital-container">
      <div className="overlay">
        <h1 className="title">Welcome to </h1> 
        <div className="logo-container">
          <img 
            src={logoImage} 
            alt="WellCare Logo" 
            className="logo-image"
          />
        </div>
        <p className="subtitle">Efficient, Secure &amp; User-Friendly</p>
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default HospitalLogin;