import React from "react";
import "../App.css";

const ProductPage = ({ product, handleClose }) => {
  const { name, description, price, image } = product;

  return (
    <div className="product-page">
      <div className="product-details">
        <img src={image} alt="Product" />
        <div className="details">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Price: {price} Rs</p>
        </div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductPage;
