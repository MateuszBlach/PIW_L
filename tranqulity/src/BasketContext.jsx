import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem('basket');
    return storedBasket ? JSON.parse(storedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (hotel) => {
    // Check if the hotel is already in the basket
    const hotelExists = basket.some(item => item.id === hotel.id);
    if (!hotelExists) {
      setBasket(prevBasket => [...prevBasket, hotel]);
    } else {
      alert('Hotel is already in the basket');
    }
  };

  const removeFromBasket = (hotelId) => {
    setBasket(prevBasket => prevBasket.filter(item => item.id !== hotelId));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
