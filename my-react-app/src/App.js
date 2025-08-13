import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;  // <---- Make sure this is here
