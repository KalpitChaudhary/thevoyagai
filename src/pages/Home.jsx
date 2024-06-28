import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="slideshow">
        <h1>YOUR SMART TRAVEL PLANNER</h1>
        <h2>Explore the world with ease and embark on your next adventure.</h2>
        <Link to="/login" className="start-planning">Start Planning With AI</Link>
      </div>
    </div>
  );
};

export default Home;
