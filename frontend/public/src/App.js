// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BudgetManager from './components/BudgetManager';
import Alerts from './components/Alerts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/budget" component={BudgetManager} />
          <Route path="/alerts" component={Alerts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
