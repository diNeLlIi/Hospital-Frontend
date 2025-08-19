import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FaRegUserCircle, FaLock } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Sample credentials for demonstration
  const validCredentials = {
    admin: { email: 'admin@wellcare.com', password: 'admin123' },
    // doctor: { email: 'doctor@wellcare.com', password: 'doc123' },
    receptionist: { email: 'rack@wellcare.com', password: '123' }
    // nurse: { email: 'nurse@wellcare.com', password: 'nurse123' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const { role, email, password } = formData;
    
    // Check if role is selected
    if (!role) {
      setError('Please select a role');
      return;
    }

    // Check credentials
    if (email === validCredentials[role]?.email && 
        password === validCredentials[role]?.password) {
      // Successful login - navigate to appropriate dashboard
      switch(role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'doctor':
          navigate('/doctor-dashboard');
          break;
        case 'receptionist':
          navigate('/receptionist-dashboard');
          break;
        case 'nurse':
          navigate('/nurse-dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      setError('Invalid credentials for the selected role');
    }
  };

  return (
    <div className="wrapper"> 
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div className="error-message">{error}</div>}
        
        <div className="dropdown">
          <label htmlFor="role">Select Role: </label>
          <select 
            name="role" 
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="receptionist">Receptionist</option>
            <option value="nurse">Nurse</option>
          </select>
        </div>
        
        <div className="input-box">
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <FaRegUserCircle className="icon"/>
        </div>
        
        <div className="input-box">
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
          <FaLock className="icon"/>
        </div>
        
        <div className="remember">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;