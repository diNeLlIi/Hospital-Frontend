// src/Components/Header/Header.jsx
import { useNavigate } from 'react-router-dom';
import logoImage from '../Assets/logo.png'; // Correct relative path
import './Header.css';

const Header = () => {
  const navigate = useNavigate(); // Initialize navigate

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

              <button type="logout"
                onClick={() => navigate('/')}
                >
                Logout</button>

    </header>
  );
};

export default Header;