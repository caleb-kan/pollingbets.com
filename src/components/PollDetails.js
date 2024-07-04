// src/components/PollDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function PollDetails() {
  const { id } = useParams();
  // Fetch poll details using id

  return (
    <div className="container">
      <h1>Poll Details for ID: {id}</h1>
      {/* Display poll details here */}
    </div>
  );
}

export default PollDetails;