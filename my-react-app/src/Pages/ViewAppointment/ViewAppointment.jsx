// src/Pages/Appointment/Appointment.jsx
import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "./ViewAppointment.css";
import doctorImg from "../../Components/Assets/docImg.png"; // Add doctor image in Assets

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState("06 June 2025");
  const [selectedTime, setSelectedTime] = useState("11.00 am");

  const dates = [
    { day: "Fri", date: "06 June 2025" },
    { day: "Sat", date: "07 June 2025" },
    { day: "Sun", date: "08 June 2025" },
    { day: "Mon", date: "09 June 2025" },
    { day: "Tue", date: "10 June 2025" },
  ];

  const times = [
    { time: "08.30 am", disabled: true },
    { time: "09.00 am", disabled: true },
    { time: "09.30 am", disabled: true },
    { time: "10.00 am", disabled: true },
    { time: "10.30 am", disabled: true },
    { time: "11.00 am", disabled: false },
    { time: "11.30 am", disabled: false },
    { time: "12.00 pm", disabled: false },
    { time: "12.30 pm", disabled: false },
    { time: "1.00 pm", disabled: false },
    { time: "1.30 pm", disabled: false },
    { time: "2.00 pm", disabled: false },
  ];

  return (
    <Layout pageTitle="Appointment">
      <div className="appointment-container">
        <div className="appointment-header">
          <h2>New Appointment</h2>
          <div className="appointment-tabs">
            <span className="active-tab">New Appointment</span>
            <span>View Appointment</span>
            <span>Appointment History</span>
          </div>
        </div>

        <div className="doctor-card">
          <img src={doctorImg} alt="Doctor" className="doctor-image" />
          <div>
            <h3>Dr. Nimal Perera</h3>
            <p>Cardiologist</p>
            <span className="status-dot"></span> Available Today
          </div>
        </div>

        <p className="appointment-no">Appointment No. <strong>06</strong></p>

        <div className="date-selector">
          <button className="nav-btn">←</button>
          {dates.map((d) => (
            <div
              key={d.date}
              className={`date-item ${selectedDate === d.date ? "active" : ""}`}
              onClick={() => setSelectedDate(d.date)}
            >
              <p>{d.day}</p>
              <p>{d.date}</p>
            </div>
          ))}
          <button className="nav-btn">→</button>
        </div>

        <div className="time-selector">
          {times.map((t) => (
            <button
              key={t.time}
              disabled={t.disabled}
              className={`time-btn ${
                selectedTime === t.time ? "active" : ""
              }`}
              onClick={() => setSelectedTime(t.time)}
            >
              {t.time}
            </button>
          ))}
        </div>

        <div className="booking-buttons">
          <button className="book-phone">Book by Phone</button>
          <button className="quick-booking">Quick Booking</button>
        </div>
      </div>
    </Layout>
  );
};

export default Appointment;
