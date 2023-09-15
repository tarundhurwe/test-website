import React from "react";
import "../App.css";

const Cards = ({ item, handleClick }) => {
  const { name, description, price, image } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="Image" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{description}</p>
        <p>Price - {price}₹</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
