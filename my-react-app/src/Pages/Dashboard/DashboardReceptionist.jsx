import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './DashboardReceptionist.css';

const Dashboard = () => {
  return (
    <Layout pageTitle="DashboardReceptionist" pageNumber="98">
      <div className="dashboard-scroll-container">
        {/* Dashboard Stats Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Dashboard</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Available Doctors</h3>
              <p className="stat-value">23</p>
            </div>
            <div className="stat-card">
              <h3>Today's Total Patients</h3>
              <p className="stat-value">215</p>
            </div>
            <div className="stat-card">
              <h3>Today's Appointments</h3>
              <p className="stat-value">215</p>
            </div>
          </div>
        </div>

        {/* Appointments Table Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Appointments</h2>
          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Patient Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2025-06-08</td>
                  <td>10:00 AM</td>
                  <td>Alice Perera</td>
                  <td><span className="status-badge confirmed">Confirmed</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
                <tr>
                  <td>2025-06-08</td>
                  <td>11:30 AM</td>
                  <td>John Smith</td>
                  <td><span className="status-badge pending">Pending</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
                <tr>
                  <td>2025-06-10</td>
                  <td>1:00 PM</td>
                  <td>Emily Tran</td>
                  <td><span className="status-badge confirmed">Confirmed</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
                <tr>
                  <td>2025-06-11</td>
                  <td>3:30 PM</td>
                  <td>Michael Lee</td>
                  <td><span className="status-badge confirmed">Confirmed</span></td>
                  <td><button className="action-btn edit">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Doctors Availability Section */}
        <div className="dashboard-section">
          <h2 className="section-title">Doctors Availability</h2>
          <div className="scrollable-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Specialization</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dr. Fernando</td>
                  <td>Cardiologist</td>
                  <td>9 AM - 1 PM</td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
                <tr>
                  <td>Dr. Patel</td>
                  <td>Dermatologist</td>
                  <td>1 PM - 4 PM</td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
                <tr>
                  <td>Dr. Ramirez</td>
                  <td>Pediatrician</td>
                  <td>10 AM - 3 PM</td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
                <tr>
                  <td>Dr. Nguyen</td>
                  <td>Neurologist</td>
                  <td>2 PM - 6 PM</td>
                  <td><button className="action-btn view">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Row Sections */}
        <div className="dashboard-row">
          <div className="dashboard-section small centered-section">
            <h3>Canceled Appointments</h3>
            <p className="large-stat">13</p>
          </div>
          <div className="dashboard-section small centered-section">
            <h3>Quick Actions</h3>
            <div className="quick-actions">
              <button className="action-btn primary">Add New Appointment</button>
              <button className="action-btn primary">Add New Doctor</button>
              <button className="action-btn">Generate Report</button>
              <button className="action-btn">Announcements</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;