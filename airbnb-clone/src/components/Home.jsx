import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=480"
          description="Comfortable places with all the essentials."
          title="Entire homes"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=480"
          description="Stylish accomodation and amenities"
          title="Cabins and cottages"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=480"
          description="Spaces that are more than just a place to sleep."
          title="Unique stays"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a84e92bd-68e6-4ce2-9fdf-b2ce1a377f53.jpg?im_w=480"
          description="Spaces that are more than just a sleep."
          title="Host an experience"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg?im_w=480"
          description="Unique activities we can do together, led by a world of hosts."
          title="Host an online experience"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg?im_w=480"
          description="Comfortable private places, with room for friends or family."
          title="Host your home"
        />
      </div>
    </div>
  );
}

export default Home;
