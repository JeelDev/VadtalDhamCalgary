import React, { useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import "../styles/style.css";

const Header = () => {
  return (
    <>
      <div className="header-image">
        <img src="../assets/header/new-canada-logo.jpg" alt="Header Image" />
      </div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
