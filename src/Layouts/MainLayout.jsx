import React, { useState } from "react";
import manuBar from "../assets/menu.png";
import "./mainlayout.css";
const MainLayout = ({ children, clicked, setClicked }) => {
  // const [] = useState(false);
  return (
    <div className="main-container">
      <header className="navbar-container">
        <div className="logo-section">
          <h1>Portfolio</h1>
        </div>
        <div className="nav-links-menu">
          <img
            src={manuBar}
            alt="menu"
            className="menu"
            onClick={() => setClicked((prev) => !prev)}
          />
        </div>
      </header>
      {children}
      <footer className="footer">
        <h2>Created By Avishek Mistry 2024</h2>
      </footer>
    </div>
  );
};

export default MainLayout;
