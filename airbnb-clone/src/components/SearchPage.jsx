import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const data = [
  {
    id: 1,
    src:
      "https://a0.muscache.com/im/pictures/b23d2617-6b70-40b0-8d23-8594be42520f.jpg?im_w=1200",
    location: "Private room in Ranikhet",
    title: "10, Nautical Miles-Mountain Cottage of a Mariner",
    description:
      "10, Nautical Mile - as the name suggests, this is a Mountain Cottage of a Mariner. This has been made out of love for the mountains and a wish to slow down the pace of life. Ideal for family and 'me' time, this is a home away from a home; tucked away in the lush green forest 15km away from the cantonment Town of Ranikhet at Uttarakhand.",
    rating: 4.93,
    price: "₹2,821/ night",
  },
  {
    id: 2,
    src:
      "https://a0.muscache.com/im/pictures/236075f3-cc16-4bd1-85f2-d3d7fb332712.jpg?im_w=1200",
    location: "Entire apartment in Noida",
    title: "Urban Cleo County",
    description:
      "Its a contemporary Service Apartment that has all the bells and whistles – including its bathtub. It has several special concept rooms that are thematically decorated and well fabricated.",
    rating: 3.8,
    price: "₹892/ night",
  },
  {
    id: 3,
    src:
      "https://a0.muscache.com/im/pictures/e488c58d-7d9e-4662-a54a-18e8b63bf9ea.jpg?im_w=1200",
    location: "Room in boutique hotel in Noida",
    title: "Rooftop Soft Petal with BathTub & Breakfast",
    description:
      "This is 2 Bedroom B&B in the heart of Noida which has stunning bathtubs,some deep copper affairs,other classic rolltops.Soak up sweeping cityscapes as you bathe, the leafy Downs and Bristol’s rainbow-hued streets are just past your toes.",
    rating: 4.4,
    price: "₹1,000/ night",
  },
  {
    id: 4,
    src:
      "https://a0.muscache.com/im/pictures/f6ee46a0-2ce2-49df-8975-4b8efa4ed480.jpg?im_w=1200",
    location: "Entire flat in New Delhi",
    title: "1 bhk with Balcony /kitchen Netflix/100 mbps wifi",
    description:
      "Welcome to our Airbnb space I am a seasoned Airbnb host, a designer & technologist I have been hosting people since 2017 at our old family house in greater kailash part 1 a great locality for anyone who is new to the city or familiar with it. ",
    rating: 5.0,
    price: "₹1,400/ night",
  },
  {
    id: 5,
    src:
      "//a0.muscache.com/im/pictures/3914639c-f650-4792-870c-8b423b426821.jpg?im_w=1200",
    location: "Entire serviced apartment in Noida",
    title: "Taj Gourmet Hot Bathtub, 2BHK",
    description:
      "Welcome to our Airbnb space I am a seasoned Airbnb host, a designer & technologist I have been hosting people since 2017 at our old family house in greater kailash part 1 a great locality for anyone who is new to the city or familiar with it. ",
    rating: 3.8,
    price: "₹1,400/ night",
  },
  {
    id: 6,
    src:
      "https://a0.muscache.com/im/pictures/7c6b41a5-9a03-421f-a775-5d8e23446d8c.jpg?im_w=1200",
    location: "Farm stay in New Delhi",
    title: "The Barn - A farm cottage by horses",
    description:
      "The cottage by the horses in a 2 acre farm is a perfect blend of rustic & luxurious decor with a lovely view of the stables & a spacious beautiful lawn surrounded by palm, ashoka, frangipani & ficus trees making it a perfect getaway",
    rating: 4.25,
    price: "₹5,071/ night",
  },
];

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest </p>
        <h1>Stays nearby </h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult data={data} />
    </div>
  );
}

export default SearchPage;
