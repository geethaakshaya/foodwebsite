// src/pages/SummaryPage.js
// import React, { useContext } from 'react';
import { useContext } from 'react';
import { FoodContext } from '../Components/FoodContext';

const SummaryPage = () => {
  const context = useContext(FoodContext);
  if (!context) {
    return <div>Loading...</div>; // or throw an error
  }

  const { foodData } = context;
  return (
    <div>
      <h2>Summary Page</h2>
      <p><strong>Name:</strong> {foodData.name}</p>
      <p><strong>Type:</strong> {foodData.type}</p>
      <p><strong>Calories:</strong> {foodData.calories}</p>
    </div>
  );
};

export default SummaryPage;
