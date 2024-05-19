import { useParams } from "react-router-dom";

import mail from "../../assets/Mail.svg";
import hotelData from "../../data";
import "./styles.css";

const HotelDetailPage = () => {
  const { hotelId } = useParams();
  console.log(hotelId);

  const findById = (id) => {
    return hotelData.find((hotel) => hotel.id.toString() === id);
  };

  const hotel = findById(hotelId);
  console.log(hotel.imageUrl);

  return (
    <section className="grid card-detail">
      <div className="detail-view">
        <h1 className="title-large detail-view-title">{hotel.name}</h1>
        <div
          className="detail-view-img"
          style={{ backgroundImage: `url(${hotel.imageUrl})` }}
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
            {hotel.currency}/room/night
          </h4>
          <div className="detail-info-essentials-description">
            <h4>
              <span className="bold">Description:</span>
            </h4>
            <p>{hotel.description}</p>
          </div>
        </div>
        <button className="detail-info-button">
          Contact <img src={mail} />
        </button>
        <div className="detail-info-images">
          <img className="detail-info-image" src={hotel.imageUrl} />
          <img className="detail-info-image" src={hotel.imageUrl} />
        </div>
      </div>
    </section>
  );
};

export default HotelDetailPage;
