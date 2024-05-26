import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure you have the firebase configuration here
import { BasketContext } from './BasketContext'; // Import BasketContext
import "./hotelPage.css";

function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToBasket, basket } = useContext(BasketContext); // Use BasketContext

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const docRef = doc(db, 'hotels', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setHotel({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching hotel:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotel();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hotel) {
    return <p>Hotel not found</p>;
  }

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${hotel.email}?subject=Inquiry about ${hotel.name}&body=Hello, I would like to know more about your hotel.`;
    window.location.href = mailtoLink;
  };

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
          <button className="button primary" onClick={() => addToBasket(hotel)}>
            Add to Basket
          </button>
          <button className="button secondary" onClick={handleEmailClick}>
            Contact Hotel
          </button>
        </div>
      </div>
    </section>
  );
}

export default HotelPage;
