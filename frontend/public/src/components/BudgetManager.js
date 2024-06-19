// src/components/BudgetManager.js
import React, { useState } from 'react';
import './BudgetManager.css';

const BudgetManager = () => {
  const [budget, setBudget] = useState(0);

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div className="budget-manager">
      <h1>Budget Manager</h1>
      <input
        type="number"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Set your budget"
      />
      <button onClick={() => alert(`Budget set to $${budget}`)}>Set Budget</button>
    </div>
  );
}

export default BudgetManager;
