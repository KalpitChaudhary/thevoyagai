import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="site-name">VoyagAI</div>
        <div className="nav-links">
          <Link to="/">Explore</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/search">Search</Link>
          <Link to="/login" className="highlighted">Login</Link>
        </div>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
