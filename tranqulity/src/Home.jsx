// Home.js
import React, { useState } from 'react';
import HotelCard from './HotelCard';
import arrow from "./Assets/Arrow.svg";

function Home({ hotels }) {
  const [selectedLocation, setSelectedLocation] = useState('');

  // Filter hotels by location
  const filteredHotels = selectedLocation
    ? hotels.filter(hotel => hotel.location === selectedLocation)
    : hotels;

  return (
    <section id="browse" className="browse-section">
      <p className="title-middle">Explore the hotels</p>
      {/* Location filter dropdown */}
      <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="">All Locations</option>
        {/* Assuming locations are predefined */}
        <option value="Florence">Florence</option>
        <option value="Rome">Rome</option>
        <option value="Venice">Venice</option>
        {/* Add more options as needed */}
      </select>
      <section className="grid hotel-cards">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </section>
      <button className="button secondary">Find more <img src={arrow} alt="Arrow" /></button>
    </section>
  );
}

export default Home;
