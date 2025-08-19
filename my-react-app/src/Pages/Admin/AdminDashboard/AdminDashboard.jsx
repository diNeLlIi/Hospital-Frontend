import React, { useState } from 'react';
import Layout from '../../../Components/Layout/Layout';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const today = new Date(2025, 7, 17, 6, 38); // 06:38 AM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });

  // Initial users data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nimal Perera",
      role: "Doctor",
      email: "nimalperera@gmail.com",
      contact: "(+94) 77 345 3467"
    },
    {
      id: 2,
      name: "Punura Perera",
      role: "Doctor",
      email: "punuraperera@gmail.com",
      contact: "(+94) 76 435 2899"
    },
    {
      id: 3,
      name: "Chamodi Peiris",
      role: "Receptionist",
      email: "chamodipeiris@gmail.com",
      contact: "(+94) 75 908 7563"
    },
    {
      id: 4,
      name: "Nimali Wathsala",
      role: "Nurse",
      email: "nimaliwathsala@gmail.com",
      contact: "(+94) 70 456 2386"
    },
    {
      id: 5,
      name: "Lithil Silva",
      role: "Doctor",
      email: "lithilsilva@gmail.com",
      contact: "(+94) 77 552 2864"
    },
    {
      id: 6,
      name: "Amali Perera",
      role: "Nurse",
      email: "amaliperera@gmail.com",
      contact: "(+94) 77 080 6726"
    },
    {
      id: 7,
      name: "Kasuni Silva",
      role: "Receptionist",
      email: "kasunisilva@gmail.com",
      contact: "(+94) 71 893 4782"
    }
  ]);

  // Role statistics data
  const [roleStats, setRoleStats] = useState([
    {
      id: 1,
      role: "Admin",
      count: 5,
      status: "Active"
    },
    {
      id: 2,
      role: "Doctor",
      count: 15,
      status: "Active"
    },
    {
      id: 3,
      role: "Nurse",
      count: 20,
      status: "Active"
    },
    {
      id: 4,
      role: "Receptionist",
      count: 10,
      status: "Pending"
    }
  ]);

  // Edit user function
  const handleEditUser = (userId, userName) => {
    console.log(`Edit user clicked for: ${userName} (ID: ${userId})`);
    alert(`Edit user: ${userName}\nID: ${userId}\n\nThis would typically open an edit modal or navigate to edit page.`);
  };

  // Delete user function
  const handleDeleteUser = (userId, userName) => {
    console.log(`Delete user clicked for: ${userName} (ID: ${userId})`);
    const confirmDelete = window.confirm(`Are you sure you want to delete user "${userName}"?`);
    
    if (confirmDelete) {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      alert(`User "${userName}" has been deleted successfully.`);
    }
  };

  // View role function
  const handleViewRole = (roleId, roleName) => {
    console.log(`View role clicked for: ${roleName} (ID: ${roleId})`);
    alert(`View role details: ${roleName}\nID: ${roleId}\n\nThis would show detailed information about this role.`);
  };

  return (
    <Layout pageTitle="Admin Dashboard" pageNumber="1">
      <div className="dashboard-scroll-container">
        {/* Dashboard Stats Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Dashboard</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-value">50</p>
            </div>
            <div className="stat-card">
              <h3>Active Staff</h3>
              <p className="stat-value">40</p>
            </div>
            <div className="stat-card">
              <h3>System Uptime</h3>
              <p className="stat-value">99.9%</p>
            </div>
          </div>
          <div className="greeting-section">Good Morning, Admin - {time}</div>
        </div>

        {/* Users Table Section */}
        <div className="dashboard-section">
          <h2 className="section-title">User Management</h2>
          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email Address</th>
                  <th>Contact Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>
                      <button 
                        className="action-btn edit"
                        onClick={() => handleEditUser(user.id, user.name)}
                      >
                        Edit
                      </button>
                      <button 
                        className="action-btn delete"
                        onClick={() => handleDeleteUser(user.id, user.name)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role Statistics Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Role Statistics</h2>
          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Count</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {roleStats.map((role) => (
                  <tr key={role.id}>
                    <td>{role.role}</td>
                    <td>{role.count}</td>
                    <td>
                      <span className={`status-badge ${role.status.toLowerCase()}`}>
                        {role.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="action-btn view"
                        onClick={() => handleViewRole(role.id, role.role)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Row Sections */}
        <div className="dashboard-row">
          <div className="dashboard-section small centered-section">
            <h3>Inactive Users</h3>
            <p className="large-stat">5</p>
          </div>
          <div className="dashboard-section small centered-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn primary">Add New User</button>
              <button className="action-btn primary">Assign Role</button>
              <button className="action-btn">Generate Report</button>
              <button className="action-btn">System Settings</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;