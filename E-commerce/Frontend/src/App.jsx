// import './App.css'
// import { HomePage } from './components/HomePage'

// function App() {

//   return (
//     <>
//       <HomePage />
//     </>
//   )
// }

// export default App

// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
