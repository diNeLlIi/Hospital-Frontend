import React from "react";
import "./HomePage.css";
import { useNavigate } from 'react-router-dom';
import logoImage from '../../Components/Assets/logo.png';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

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

        <button 
          className="login-btn"
          onClick={() => navigate('/login')} 
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;