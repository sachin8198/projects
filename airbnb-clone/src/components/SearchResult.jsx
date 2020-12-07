import React from "react";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./SearchResult.css";
function SearchResult({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div key={item.id} className="searchResult">
          <img src={item.src} alt="" />
          <FavoriteBorderIcon className="searchResult__heart" />
          <div className="searchResult__info">
            <div className="searchResult__infoTop">
              <p>{item.location}</p>
              <h3>{item.title}</h3>
              <p>____</p>
              <p>{item.description}</p>
            </div>
            <div className="searchResult__infoBottom">
              <div className="searchResult__stars">
                <StarIcon className="searchResult__star" />
                <p>
                  <strong>{item.rating}</strong>
                </p>
              </div>
              <div className="searchResult__price">
                <h2>{item.price}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SearchResult;
