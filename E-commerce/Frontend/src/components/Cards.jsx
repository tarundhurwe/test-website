import React, { useState } from "react";
import "../App.css";
import ProductPage from "./ProductPage";

const Cards = ({ item, handleClick }) => {
  const { name, description, price, image } = item;
  const [showProductPage, setShowProductPage] = useState(false);

  const handleImageClick = () => {
    setShowProductPage(true);
  };

  const handleCloseProductPage = () => {
    setShowProductPage(false);
  };

  return (
    <div className="cards">
      <div className="image_box" onClick={handleImageClick}>
        <img src={image} alt="Image" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{description}</p>
        <p>Price - {price} Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>

      {showProductPage && (
        <ProductPage product={item} handleClose={handleCloseProductPage} />
      )}
    </div>
  );
};

export default Cards;
