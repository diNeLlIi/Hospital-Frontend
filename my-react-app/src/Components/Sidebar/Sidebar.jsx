import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { MdDashboard } from "react-icons/md";
import { TbReportMedical } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { CiMedicalCross } from "react-icons/ci";
import { MdOutlinePersonSearch } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const menuItems = [
    { icon: <MdDashboard size={20}/>, path: '/dashboard', label: 'Dashboard' },
    { icon: <TbReportMedical size={20}/>, path: '/appointments', label: 'Appointments' },
    { icon: <FaUserDoctor size={20}/>, path: '/doctors', label: 'Doctors' },
    { icon: <CiMedicalCross size={20}/>, path: '/add-patients', label: 'Patients' },
    { icon: <MdOutlinePersonSearch size={20}/>, path: '/staff', label: 'Staff' },
    { icon: <TbReport size={20}/>, path: '/reports', label: 'Reports' },
    { icon: <IoSettingsOutline size={20}/>, path: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="wellcare-sidebar">
      <nav>
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
      </nav>
    </aside>
  );
};

export default Sidebar;