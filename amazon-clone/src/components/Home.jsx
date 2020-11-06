import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://play-lh.googleusercontent.com/p4OrpVf1Vl01WQxg43F_mWz4yXOtSnlnnwyFEJLulveQZYuIwb-2-Vk0B9XSnTjAEA"
          alt="Home Image"
        />
        <div className="home__row">
          <Product
            id={1}
            title="The lean startup"
            price={290.35}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Mi Notebook 14 Intel Core i5-10210U 10th Gen"
            image="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"
            price={41999.0}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Samsung Galaxy Watch Active 2 (Bluetooth, 44 mm)"
            image="https://images-na.ssl-images-amazon.com/images/I/61uej9efKYL._SX679_.jpg"
            price={20448.0}
            rating={5}
          />
          <Product
            id={4}
            title="HP Laserjet Pro M126nw Multi-Function Direct Wireless"
            image="https://images-na.ssl-images-amazon.com/images/I/61%2Bh3559FyL._SX679_.jpg"
            price={16349.74}
            rating={2}
          />
          <Product
            id={5}
            title="Little's Junior Ring (Multicolour) "
            image="https://images-na.ssl-images-amazon.com/images/I/61mD249fkyL._SX679_.jpg"
            price={139.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={5}
            title="Durian Bid Leatherette Single Seater Sofa Glossy Finish Black "
            image="https://m.media-amazon.com/images/I/51ETU8BaRmL._AC_UL600_.jpg"
            price={14690.21}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
