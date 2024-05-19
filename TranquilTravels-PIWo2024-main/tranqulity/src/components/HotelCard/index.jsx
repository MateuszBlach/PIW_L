import { Link } from "react-router-dom";

import "./styles.css";
import heart from "../../assets/Heart.svg";
import heartFilled from "../../assets/HeartFilled.svg";
import arrow from "../../assets/Arrow.svg";

const HotelCard = (props) => {
  return (
    <article className="hotel-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      >
        <p className="chip">{props.location}</p>
        {props.inFavourites ? <img src={heartFilled} /> : <img src={heart} />}
      </div>
      <p className="text-middle">{props.name}</p>
      <p className="text-small">{props.description}</p>
      <div className="hotel-card-footer">
        <p className="text-middle">{props.rating}</p>
        <p className="text-middle">{`${props.price}${props.currency}/room`}</p>
      </div>
      <Link to={`/hotel/${props.id}`}>
        <button className="button-detail">
          View offer <img src={arrow} />
        </button>
      </Link>
    </article>
  );
};

export default HotelCard;
