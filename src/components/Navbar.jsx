// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Hospital Management
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/patients">
                Manage Patients
              </Link>{" "}
              {/* Link to manage patients */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
