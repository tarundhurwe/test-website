// import React from 'react'
// import { NavBar } from './NavBar'
// import { Crousel } from './Crousel'

// export const HomePage = () => {
//     return (
//         <>
//             <NavBar />
//             <Crousel />
//         </>
//     )
// }
// src/pages/HomePage.js
import React from "react";
import ProductCard from "../components/ProductCard";
import "../App.css";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "./images/paperclips.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "./images/sticky_notes.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "./images/notebooks.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "./images/leather_journal.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "./images/clipboards.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 19.99,
      image: "./images/pen_set.jpg",
    },
  ];

  return (
    <div className="home-page">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
