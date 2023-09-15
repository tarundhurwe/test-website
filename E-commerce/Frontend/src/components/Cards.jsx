import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    // <div class="card">
    //   <div class="card-body" onClick={handleImageClick}>
    //     <img src={image} class="card-img-top" alt="..." />
    //   </div>
    //   <div className="details">
    //     <h5 class="card-title">{name}</h5>
    //     <p class="card-text">{description}</p>
    //     <p class="card-text">Price - {price} Rs</p>
    //     <button
    //       type="button"
    //       class="btn btn-danger"
    //       onClick={() => handleClick(item)}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>

    // {showProductPage && (
    //   <ProductPage product={item} handleClose={handleCloseProductPage} />
    // )}
    // </div>
    <div class="card m-3" style={{ minWidth: "20rem", maxWidth: "20rem" }}>
      <img
        src={image}
        class="card-img-top"
        alt="..."
        style={{ width: "20rem", height: "20rem", objectFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <p class="card-text">Price - {price} Rs</p>
        <button
          type="button"
          class="btn btn-danger"
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
