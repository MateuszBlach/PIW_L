import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import arrow from "./Assets/Arrow.svg";
import { BasketContext } from './BasketContext'; // Import BasketContext

function HotelCard({ hotel }) {
  const { addToBasket } = useContext(BasketContext); // Use BasketContext

  return (
    <article className="hotel-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${hotel.photoUrl})` }}
      >
        <div className="card-labels">
          <p className="chip">{hotel.location}</p>
          <p className="chip">&#10084;</p>
        </div>
      </div>
      <p className="text-middle">{hotel.name}</p>
      <p className="text-small">{hotel.description}</p>
      <div className="hotel-card-footer">
        <p className="text-middle">{hotel.rating}</p>
        <p className="text-middle">{hotel.price}</p>
      </div>
      <Link to={`/hotel/${hotel.id}`}>
        <button className="button primary">
          View offer <img src={arrow} alt="Arrow" />
        </button>
      </Link>
      <button className="button secondary" onClick={() => addToBasket(hotel)}>
        Add to Basket
      </button>
    </article>
  );
}

export default HotelCard;
