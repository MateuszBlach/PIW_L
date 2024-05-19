// Home.js
import React from 'react';
import hotelsData from './hotelsData';
import HotelCard from './HotelCard';
import arrow from "./Assets/Arrow.svg"

function Home() {
  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      <input className="searchbar" placeholder="Search by hotel name, place etc." />
      <section className="grid hotel-cards">
        {hotelsData.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </section>
      <button className="button secondary">Find more <img src={arrow} alt="Arrow" /></button>
    </section>
  );
}

export default Home;
