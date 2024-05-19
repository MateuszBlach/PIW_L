// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import arrow from "./Assets/Arrow.svg";
import logo from "./Assets/logo.svg";

// Components
import HotelPage from './HotelPage';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="fixed-navigation">
          <img className="logo" src={logo} alt="Logo" />
          <ul className="nav-links">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="#browse">Browse</a></li>
            <li><a className="nav-link" href="#rent">Rent with us</a></li>
            <li><a className="nav-link" href="#">Sign up</a></li>
            <button className="button primary">Log in</button>
          </ul>
          <button className="button primary hidden">Menu</button>
        </nav>

        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:id" element={<HotelPage />} />
        </Routes>

        {/* Footer */}
        <section id="rent" className="footer grid">
          <div className="card-image" />
          <article className="footer-details">
            <p className="title-large">Rent with us!</p>
            <p className="text-middle">If you’re a hotel or an apartment owner who’s looking to reach more customers you can now rent your property with TranquilTravels. </p>
            <button className="button secondary">Learn more <img src={arrow} alt="Arrow" /></button>
          </article>
        </section>
      </div>
    </Router>
  );
}

export default App;
