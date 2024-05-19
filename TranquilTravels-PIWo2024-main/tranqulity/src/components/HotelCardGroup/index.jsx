import HotelCard from "../HotelCard";

const HotelCardGroup = (props) => {
  const cardsArray = props.data.map((card) => (
    <HotelCard key={card.id} {...card} />
  ));

  return <section className="grid hotel-cards">{cardsArray}</section>;
};

export default HotelCardGroup;
