import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;  // <---- Make sure this is here
