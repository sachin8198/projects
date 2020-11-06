import React from "react";
import "./RecentItem.css";
export const RecentItem = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        width="400"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          alt=""
        />
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>cleverprogrammer</p>
          <p>Science & Technology</p>
        </div>
      </div>
    </div>
  );
};
