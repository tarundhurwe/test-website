import React from "react";
// import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = ({ size, setShowCart }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{ maxWidth: "100vw" }}
      >
        <div className="container-fluid" onClick={() => setShowCart(true)}>
          <a className="navbar-brand" href="#">
            Ink & Quill
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Cart ({0})
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login/Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
