import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ViewAppointment from './Pages/ViewAppointment/ViewAppointment';

function App() {
  return (
    <Router>
      <div className="app-container">
        <ViewAppointment />
      </div>
    </Router>
  );
}

export default App;  // <---- Make sure this is here
