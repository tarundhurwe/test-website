import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./ProductPage";

const Cards = ({ item, handleClick }) => {
  const { name, description, price, image } = item;
  const [showProductPage, setShowProductPage] = useState(false);
  const [totalItem, setTotalItem] = useState(0);

  const handleImageClick = () => {
    setShowProductPage(true);
    set;
  };

  const handleCloseProductPage = () => {
    setShowProductPage(false);
  };

  return (
    <div className="card m-3" style={{ minWidth: "20rem", maxWidth: "20rem" }}>
      <img
        src={image}
        className="card-img-top"
        alt="..."
        style={{
          width: "19.8rem",
          height: "20rem",
          objectFit: "cover",
          margin: "auto",
        }}
        onClick={handleImageClick}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price - {price} Rs</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleClick(item)}
        >
          Add to Cart
        </button>
      </div>
      {showProductPage && (
        <ProductPage product={item} handleClose={handleCloseProductPage} />
      )}
    </div>
  );
};

export default Cards;
