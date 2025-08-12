// src/Components/Header/Header.jsx
import React from 'react';
import './Header.css';
import logoImage from '../Assets/logo.png'; // Correct relative path

const Header = () => {
  return (
    <header className="wellcare-header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src={logoImage} 
            alt="WellCare Logo" 
            className="logo-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;