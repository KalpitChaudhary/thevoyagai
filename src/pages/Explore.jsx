import React, { useState } from 'react';
import './Explore.css';

const Explore = () => {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [mood, setMood] = useState('');

  const handlePlanNow = () => {
    // Logic to suggest destination based on location, budget, and mood
    alert(`Suggesting destination for Location: ${location}, Budget: ${budget}, Mood: ${mood}`);
  }

  return (
    <div className="explore-container">
      <h2>Explore</h2>
      <form>
        <input
          type="text"
          placeholder="Enter your current location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <button type="button" onClick={handlePlanNow}>Plan Now</button>
      </form>
    </div>
  );
}

export default Explore;
