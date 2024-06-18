import React from "react";

import "./mainlayout.css";
const MainLayout = ({ children }) => {
  return (
    <div className="main-container">
      <header className="navbar-container">
        <div className="logo-section">
          <h1>Portfolio</h1>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
      {children}
      <footer className="footer">
        <h2>Created By Avishek Mistry 2024</h2>
      </footer>
    </div>
  );
};

export default MainLayout;
