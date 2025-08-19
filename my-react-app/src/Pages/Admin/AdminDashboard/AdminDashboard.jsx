import React from 'react';
import Layout from '../../../Components/Layout/Layout';
import './AdminDashboard.css';
import { FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6';

const AdminDashboard = () => {
  const today = new Date(2025, 7, 17, 6, 38); // 06:38 AM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });

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
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Nimal Perera</td>
                  <td>Doctor</td>
                  <td><span className="status-badge confirmed">Active</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
                <tr>
                  <td>Chamodi Silva</td>
                  <td>Receptionist</td>
                  <td><span className="status-badge pending">Pending</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
                <tr>
                  <td>Nurse Anura</td>
                  <td>Nurse</td>
                  <td><span className="status-badge confirmed">Active</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
                <tr>
                  <td>Admin John</td>
                  <td>Admin</td>
                  <td><span className="status-badge confirmed">Active</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
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
                <tr>
                  <td>Admin</td>
                  <td>5</td>
                  <td><span className="status-badge confirmed">Active</span></td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
                <tr>
                  <td>Doctor</td>
                  <td>15</td>
                  <td><span className="status-badge confirmed">Active</span></td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
                <tr>
                  <td>Nurse</td>
                  <td>20</td>
                  <td><span className="status-badge confirmed">Active</span></td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
                <tr>
                  <td>Receptionist</td>
                  <td>10</td>
                  <td><span className="status-badge pending">Pending</span></td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
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