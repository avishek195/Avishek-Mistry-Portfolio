import React, { useState } from "react";
import manuBar from "../assets/menu.png";
import "./mainlayout.css";
const MainLayout = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="main-container">
      <header className="navbar-container">
        <div className="logo-section">
          <h1>Portfolio</h1>
        </div>
        {clicked ? (
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
            <li>
              <img
                src={manuBar}
                alt="menu"
                onClick={() => setClicked((prev) => !prev)}
              />
            </li>
          </ul>
        ) : (
          <div className="nav-links">
            <img
              src={manuBar}
              alt="menu"
              onClick={() => setClicked((prev) => !prev)}
            />
          </div>
        )}
      </header>
      {children}
      <footer className="footer">
        <h2>Created By Avishek Mistry 2024</h2>
      </footer>
    </div>
  );
};

export default MainLayout;
