import { useState } from "react";
import HotelCardGroup from "../../components/HotelCardGroup";
import hotelData from "../../data";

import "./styles.css";

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredData = hotelData.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm) ||
      hotel.location.toLowerCase().includes(searchTerm) ||
      hotel.description.toLowerCase().includes(searchTerm) ||
      hotel.price.toString().toLowerCase().includes(searchTerm) ||
      hotel.currency.includes(searchTerm)
  );

  return (
    <div>
      <section id="hero" className="grid hero-section">
        <article className="hero-details">
          <p className="title-large">Welcome, your tranquillity oasis awaits</p>
        </article>
      </section>
      <section id="browse" className="browse-section">
        <p className="title-middle">Explore the hotels</p>
        <input
          className="searchbar"
          placeholder="Search by hotel name, place, description etc."
          onChange={handleSearchChange}
        />
        {filteredData.length > 0 ? (
          <HotelCardGroup data={filteredData} />
        ) : (
          <h1>No hotels found</h1>
        )}
      </section>
    </div>
  );
};

export default ExplorePage;
