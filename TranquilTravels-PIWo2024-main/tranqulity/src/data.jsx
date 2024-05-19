import cards1Image from "./assets/cards1.jpg";
import cards2Image from "./assets/cards2.jpg";
import cards3Image from "./assets/cards3.jpg";
import cards4Image from "./assets/cards4.jpg";

const hotelData = [
  {
    id: 1,
    location: "Florence",
    name: "Harmony Hideaway Hotel",
    imageUrl: cards1Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
    price: 100,
    currency: "€",
    rating: "★★★★★",
    inFavourites: true,
  },
  {
    id: 2,
    location: "Madrid",
    name: "Serene Retreat",
    imageUrl: cards2Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
    price: 70,
    currency: "€",
    rating: "★★★★☆",
    inFavourites: false,
  },
  {
    id: 3,
    location: "Sintra",
    name: "Palm Springs",
    imageUrl: cards3Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
    price: 65,
    currency: "€",
    rating: "★★★★☆",
    inFavourites: false,
  },
  {
    id: 4,
    location: "Sienna",
    name: "Oasis Resort",
    imageUrl: cards4Image,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus quis felis a venenatis. Suspendisse accumsan aliquam lorem, sit amet ultricies justo tristique nec.",
    price: 115,
    currency: "€",
    rating: "★★★★★",
    inFavourites: true,
  },
];

export default hotelData;
