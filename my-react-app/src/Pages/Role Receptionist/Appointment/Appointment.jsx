import React from "react";
import "./Appointment.css";
import Header from "../../../Components/Header/Header";
import Sidebar from "../../../Components/Sidebar/Sidebar";

const doctors = [
  { name: "Dr. Nimal Perera", specialty: "Cardiologist", fee: 2400, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Lasantha De Silva", specialty: "General Physician", fee: 3600, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Sanduni Alwis", specialty: "Neurologist", fee: 3400, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Prasad Kumara", specialty: "Oncologist", fee: 3800, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Kamal Fernando", specialty: "Dermatologist", fee: 5200, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Nadeesha Perera", specialty: "Pediatrician", fee: 3400, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Malika Senarath", specialty: "Gynecologist", fee: 2500, image: "https://via.placeholder.com/60", available: true },
  { name: "Dr. Dilan Abeykoon", specialty: "ENT Specialist", fee: 2800, image: "https://via.placeholder.com/60", available: true }
];

const upcomingAppointments = [
  { name: "Janith Madushanka", time: "10.00 am - 10.30 am", type: "High Blood Pressure" },
  { name: "Ayesha Patel", time: "10.30 am - 11.00 am", type: "Diabetes Management" },
  { name: "Michael Thompson", time: "11.00 am - 11.30 am", type: "Cholesterol Screening" },
  { name: "Sarah Johnson", time: "11.30 am - 12.00 pm", type: "Weight Loss Consultation" },
  { name: "Emma Rodriguez", time: "12.00 pm - 12.30 pm", type: "Allergy Testing" },
  { name: "David Lee", time: "12.30 pm - 1.00 pm", type: "Mental Health Check-up" },
  { name: "Olivia Brown", time: "1.00 pm - 1.30 pm", type: "Vision Exam" },
  { name: "James Wilson", time: "2.00 pm - 2.30 pm", type: "Hearing Test" },
  { name: "Sophia Davis", time: "2.00 pm - 2.30 pm", type: "Family Planning Consultation" }
];

const previousAppointments = [
  { name: "Tharushi Senanayake", time: "10.00 am - 10.30 am", type: "ENT Examination" },
  { name: "Ayesha Patel", time: "11.00 am", type: "Nutritional Counseling" },
  { name: "Michael Thompson", time: "11.00 am - 11.30 am", type: "Stress Management" },
  { name: "Sarah Johnson", time: "11.30 am - 12.00 pm", type: "General Health Check-up" },
  { name: "Emma Rodriguez", time: "12.00 pm - 12.30 pm", type: "Cardiac Evaluation" },
  { name: "David Lee", time: "12.00 pm", type: "Dermatology Consultation" },
  { name: "Olivia Brown", time: "1.00 pm - 1.30 pm", type: "Thyroid Check-up" }
];

const Appointments = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="appointments-container">
        
        {/* Left: Doctors */}
        <div className="appointments-left">
          <div className="tabs">
            <button className="tab active">New Appointment</button>
            <button className="tab">View Appointment</button>
            <button className="tab">Appointment History</button>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search here" />
            <button className="search-btn">Search</button>
            <select>
              <option>All</option>
            </select>
          </div>

          <div className="doctor-list">
            {doctors.map((doc, i) => (
              <div className="doctor-card" key={i}>
                <img src={doc.image} alt={doc.name} />
                <div>
                  <h4>{doc.name}</h4>
                  <p className="specialty">{doc.specialty}</p>
                  <p className="available">Available Today</p>
                  <p className="fee">Fee Rs {doc.fee.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Appointments */}
        <div className="appointments-right">
          <div className="appointment-section">
            <h3>Upcoming Appointment <span>Today</span></h3>
            <ul>
              {upcomingAppointments.map((appt, i) => (
                <li key={i}>
                  <div>
                    <strong>{appt.name}</strong>
                    <span>{appt.time}</span>
                  </div>
                  <p>{appt.type}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="appointment-section">
            <h3>Previous Appointment <span>Jun 2</span></h3>
            <ul>
              {previousAppointments.map((appt, i) => (
                <li key={i}>
                  <div>
                    <strong>{appt.name}</strong>
                    <span>{appt.time}</span>
                  </div>
                  <p>{appt.type}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
