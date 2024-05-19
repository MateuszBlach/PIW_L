// HotelPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from './hotelsData';
import "./hotelPage.css"

function HotelPage() {
  const { id } = useParams();
  const hotel = hotelsData.find(hotel => hotel.id === parseInt(id));
  console.log(hotel);

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  return (
    <section className="grid card-detail">
      <div className="detail-view">
        <h1 className="title-large detail-view-title">{hotel.name}</h1>
        <div
          className="detail-view-img"
          style={{ backgroundImage: `url(${hotel.photoUrl})` }}
        ></div>
      </div>
      <div className="detail-info">
        <div className="detail-info-essentials">
          <h4>
            <span className="bold">Location:</span> {hotel.location}
          </h4>
          <h4>
            <span className="bold">Local category:</span> {hotel.rating}
          </h4>
          <h4>
            <span className="bold">Price:</span> {hotel.price}
          </h4>
          <div className="detail-info-essentials-description">
            <h4>
              <span className="bold">Description:</span>
            </h4>
            <p>{hotel.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotelPage;
