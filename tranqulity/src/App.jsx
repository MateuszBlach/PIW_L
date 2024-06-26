import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';
import arrow from "./Assets/Arrow.svg";
import logo from "./Assets/logo.svg";
import HotelPage from './HotelPage';
import Home from './Home';
import GoogleLoginComponent from './GoogleLoginComponent';
import fetchHotelsData from './fetchHotelsData'; // Import the fetch function
import { BasketProvider } from './BasketContext'; // Import BasketProvider
import Basket from './Basket';

function App() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotelsData = async () => {
      const data = await fetchHotelsData();
      setHotels(data);
    };
    getHotelsData();
  }, []);

  return (
    <BasketProvider>
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
              <GoogleLoginComponent />
              <Basket />
            </ul>
            <button className="button primary hidden">Menu</button>
          </nav>

          {/* Main content */}
          <Routes>
            <Route path="/" element={<Home hotels={hotels} />} />
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
    </BasketProvider>
  );
}

export default App;
