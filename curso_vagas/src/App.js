// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadCV from './pages/UploadCV';  // Certifique-se de ter esta importação correta
import JobAreas from './pages/JobAreas';
import JobListings from './pages/JobListings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<UploadCV />} />
          <Route path="/job-areas" element={<JobAreas />} />
          <Route path="/job-listings" element={<JobListings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
