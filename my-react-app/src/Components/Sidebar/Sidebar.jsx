// Sidebar.js - Enhanced with better error handling
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { MdDashboard } from "react-icons/md";
import { TbReportMedical } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers, FaUserCog } from "react-icons/fa";

const Sidebar = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Check for user data on component mount and when localStorage changes
    const checkUser = () => {
      try {
        const userData = localStorage.getItem('user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setUserRole(parsedUser?.role || '');
          console.log('User data found:', parsedUser);
        } else {
          console.log('No user data in localStorage');
          setUser(null);
          setUserRole('');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        setUser(null);
        setUserRole('');
      }
    };

    // Check initially
    checkUser();

    // Listen for storage changes (in case of logout from another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        checkUser();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Define menu items for each role based on your requirements
  const menuItemsByRole = {
    admin: [
      { icon: <MdDashboard size={20}/>, path: '/admin-dashboard', label: 'Dashboard' },
      { icon: <FaUserCog size={20}/>, path: '/admin/doctors', label: 'Doctors' },
      { icon: <FaUsers size={20}/>, path: '/admin/receptionists', label: 'Receptionists' },
      { icon: <FaUsers size={20}/>, path: '/admin/nurses', label: 'Nurses' },
    ],   
    doctor: [
      { icon: <MdDashboard size={20}/>, path: '/doctor-dashboard', label: 'Dashboard' },
      { icon: <TbReportMedical size={20}/>, path: '/appointments', label: 'Appointments' },
      { icon: <CiMedicalCross size={20}/>, path: '/doctor-view-patient-list', label: 'Patients' },
    ],
    receptionist: [
      { icon: <MdDashboard size={20}/>, path: '/receptionist-dashboard', label: 'Dashboard' },
      { icon: <FaUserDoctor size={20}/>, path: '/doctors', label: 'Doctors' },
      { icon: <TbReportMedical size={20}/>, path: '/appointments', label: 'Appointments' },
      { icon: <CiMedicalCross size={20}/>, path: '/patient-list', label: 'Patients' },
    ]
  };

  // Get menu items based on user role, default to empty array if role not found
  const menuItems = menuItemsByRole[userRole] || [];

  return (
    <aside className="wellcare-sidebar">
      <nav>
        {/* Display user info at the top */}
        {user && (
          <div className="user-info">
            <p className="user-role">{userRole.toUpperCase()}</p>
            <p className="user-email">{user.email}</p>
          </div>
        )}
        
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => 
                  `menu-item ${isActive ? 'active' : ''}`
                }
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        
        {/* Show message if no menu items (for debugging) */}
        {menuItems.length === 0 && user && (
          <div className="no-menu-items">
            <p>No menu items available for "{userRole}" role</p>
            <p>Available roles: admin, doctor, receptionist</p>
          </div>
        )}
        
        {/* Show message if no user is logged in */}
        {!user && (
          <div className="no-user">
            <p>Please log in to see menu options</p>
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;