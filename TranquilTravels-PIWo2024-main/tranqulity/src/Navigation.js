// Navigation.js
import React from 'react';
import logo from './Assets/logo.svg'; // Import the logo image
import './style.css';

function Navigation() {
  return (
    <nav className="fixed-navigation">
        <img className="logo" src={logo} alt="Logo"/> {/* Use imported logo */}
        <ul className="nav-links">
            <li><a className="nav-link" href="#">Home</a></li>
            <li><a className="nav-link" href="#browse">Browse</a></li>
            <li><a className="nav-link" href="#rent">Rent with us</a></li>
            <li><a className="nav-link" href="#">Sign up</a></li>
            <button className="button primary">Log in</button>
        </ul>
        <button className="button primary hidden">Menu</button>
    </nav>
  );
}

export default Navigation;

