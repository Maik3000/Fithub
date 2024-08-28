// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Estilos opcionales

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Health & Wellness Platform</h1>
      <p>Your one-stop solution for tracking your health metrics.</p>
      <div className="home-buttons">
        <Link to="/dashboard" className="btn">Dashboard</Link>
        <Link to="/health-data" className="btn">Enter Health Data</Link>
        <Link to="/login" className="btn">Login</Link>
        <Link to="/admin" className="btn">Admin Panel</Link>
      </div>
    </div>
  );
}

export default Home;
