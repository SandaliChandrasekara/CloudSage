// src/components/Dashboard.js
import React from 'react';
import Charts from './Charts';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Charts />
    </div>
  );
}

export default Dashboard;
