import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import './DoctorDateSelection.css';

const appointmentsData = {
  1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
  7: ['2PM-4PM'],
  9: ['9AM-1PM'],
  10: ['6PM-11PM'],
  12: ['2PM-7PM'],
  13: ['9AM-3PM'],
  14: ['9AM-12PM'],
  16: ['6PM-10PM'],
  18: ['6AM-10PM'],
  19: ['10AM-3PM'],
  20: ['12PM-4PM'],
  26: ['1PM-2PM']
};

const DoctorDateSelection = () => {
  const [date, setDate] = useState(new Date());
  const [showDay16View, setShowDay16View] = useState(false);
  const navigate = useNavigate();

  const handleDateClick = (selectedDate) => {
    setDate(selectedDate);
    const day = selectedDate.getDate();

    if (day === 7) {
      navigate('/doctor-dashboard'); 
    } else if (day === 16) {
      setShowDay16View(true);
    } else {
      setShowDay16View(false);
    }
  };

  return (
    <Layout pageTitle="DoctorDateSelection" pageNumber="98">
      <div className="dashboard-scroll-container">
        {!showDay16View && (
          <>
          {/* Today Appointments Table */}
            <div className="dashboard-section">
              <h2 className="section-title">
                Appointments - 16th August 2025
              </h2>
              <div className="scrollable-table-container">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alice Perera</td>
                      <td>6.00PM</td>
                      <td>
                        <button className="action-btn confirmed">Confirmed</button>
                      </td>
                      <td>
                        <button
                          className="action-btn view"
                          onClick={() => navigate('/doctor-view-patient-details')}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>John Smith</td>
                      <td>7.00PM</td>
                      <td>
                        <button className="action-btn pending">Pending</button>
                      </td>
                      <td>
                        <button
                          className="action-btn view"
                          onClick={() => navigate('/doctor-view-patient-details')}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Emily Tran</td>
                      <td>8.00PM</td>
                      <td>
                        <button className="action-btn confirmed">Confirmed</button>
                      </td>
                      <td>
                        <button
                          className="action-btn view"
                          onClick={() => navigate('/doctor-view-patient-details')}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Sheron Perera</td>
                      <td>9.30PM</td>
                      <td>
                        <button className="action-btn confirmed">Confirmed</button>
                      </td>
                      <td>
                        <button
                          className="action-btn view"
                          onClick={() => navigate('/doctor-view-patient-details')}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Michael Lee</td>
                      <td>10.00PM</td>
                      <td>
                        <button className="action-btn rescheduled">Rescheduled</button>
                      </td>
                      <td>
                        <button
                          className="action-btn view"
                          onClick={() => navigate('/doctor-view-patient-details')}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Calendar Section */}
            <div className="dashboard-section calendar-section">
              <h2 className="section-title">Appointments - Dr. Nimal Perera</h2>
              <div className="calendar-widget">
                <Calendar
                  onChange={handleDateClick}
                  value={date}
                  tileContent={({ date, view }) => {
                    if (view === 'month') {
                      const day = date.getDate();
                      if (appointmentsData[day]) {
                        return (
                          <ul className="appointment-times">
                            {appointmentsData[day].map((time, index) => (
                              <li key={index}>{time}</li>
                            ))}
                          </ul>
                        );
                      }
                    }
                    return null;
                  }}
                  tileClassName={({ date, view }) => {
                    if (view === 'month' && appointmentsData[date.getDate()]?.length) {
                      return date.getDate() === 16
                        ? 'react-calendar__tile--highlight day-16'
                        : 'react-calendar__tile--highlight';
                    }
                    return null;
                  }}
                />
                <div className="calendar-actions">
                  <button onClick={() => setDate(new Date())}>Today</button>
                  <button>Tomorrow</button>
                  <button>This Week</button>
                </div>
              </div>
            </div>

            

            {/* Bottom Row Sections */}
            <div className="dashboard-row">
              <div className="dashboard-section small centered-section">
                <h3>Canceled Appointments</h3>
                <p className="large-stat">01</p>
              </div>
              <div className="dashboard-section small centered-section">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button
                    className="action-btn primary1"
                    onClick={() => navigate('/doctor-view-patient-list')}
                  >
                    View Patient Info
                  </button>
                  <button className="action-btn primary2">View Appointments</button>
                  <button className="action-btn">Cancel Appointments</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Special Day 16 View */}
        {showDay16View && (
          <div className="dashboard-section special-day-view">
            <h2 className="section-title">Special Schedule - 16th August 2025</h2>
            <p>Here is the custom interface for appointments on the 16th.</p>
            <button
              className="action-btn primary"
              onClick={() => setShowDay16View(false)}
            >
              Back to Dashboard
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default DoctorDateSelection;
