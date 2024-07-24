import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>YourLogo</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/govt-jobs">Government Jobs</Link></li>
        <li><Link to="/youtube">YouTube</Link></li>
        <li><Link to="/private-jobs">Private Jobs</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/subscription-plan">Subscription Plan</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
