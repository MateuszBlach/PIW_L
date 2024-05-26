import React, { useContext } from 'react';
import { BasketContext } from './BasketContext';

const Basket = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);

  return (
    <div className="basket">
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>No items in the basket</p>
      ) : (
        <ul>
          {basket.map(hotel => (
            <li key={hotel.id}>
              {hotel.name} - {hotel.price}
              <button onClick={() => removeFromBasket(hotel.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;
