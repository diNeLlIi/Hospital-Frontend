import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './NurseDashboard.css';

const NurseDashboard = () => {
  const today = new Date(2025, 7, 17, 7, 10); // 07:10 AM +0530
  const time = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Colombo' });

  return (
    <Layout pageTitle="Nurse Dashboard" pageNumber="4">
      <div className="dashboard-scroll-container">
        {/* Dashboard Stats Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Dashboard</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Rooms</h3>
              <p className="stat-value">10</p>
            </div>
            <div className="stat-card">
              <h3>Occupied Beds</h3>
              <p className="stat-value">7</p>
            </div>
            <div className="stat-card">
              <h3>Pending Tasks</h3>
              <p className="stat-value">3</p>
            </div>
          </div>
          <div className="greeting-section">Good Morning, Nurse - {time}</div>
        </div>

        {/* Room Management Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Room & Bed Management</h2>
          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Room Number</th>
                  <th>Patient</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>John Doe</td>
                  <td><span className="status-badge occupied">Occupied</span></td>
                  <td><button className="action-btn discharge">Discharge</button></td>
                </tr>
                <tr>
                  <td>102</td>
                  <td></td>
                  <td><span className="status-badge vacant">Vacant</span></td>
                  <td><button className="action-btn admit">Admit</button></td>
                </tr>
                <tr>
                  <td>103</td>
                  <td>Mary Jane</td>
                  <td><span className="status-badge occupied">Occupied</span></td>
                  <td><button className="action-btn discharge">Discharge</button></td>
                </tr>
                <tr>
                  <td>104</td>
                  <td></td>
                  <td><span className="status-badge vacant">Vacant</span></td>
                  <td><button className="action-btn admit">Admit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Patient Details Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Patient Details</h2>
          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Room</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>101</td>
                  <td>Stable</td>
                </tr>
                <tr>
                  <td>Mary Jane</td>
                  <td>103</td>
                  <td>Critical</td>
                </tr>
                <tr>
                  <td>Peter Parker</td>
                  <td>105</td>
                  <td>Stable</td>
                </tr>
                <tr>
                  <td>Anna Smith</td>
                  <td>107</td>
                  <td>Recovering</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Row Sections */}
        <div className="dashboard-row">
          <div className="dashboard-section small centered-section">
            <h3>Critical Patients</h3>
            <p className="large-stat">1</p>
          </div>
          <div className="dashboard-section small centered-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn primary">Update Patient Status</button>
              <button className="action-btn primary">Assign Bed</button>
              <button className="action-btn">View Reports</button>
              <button className="action-btn">Notify Doctor</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NurseDashboard;