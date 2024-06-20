import { useState } from "react";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import MainLayout from "./Layouts/MainLayout";
import manuBar from "../src/assets/menu.png";
import { FaTimes } from "react-icons/fa";
import "./App.css";
function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="app">
      {clicked ? (
        <div className="app-menu">
          <div className="nav-links">
            <div className="li">
              <FaTimes
                className="menu"
                onClick={() => setClicked((prev) => !prev)}
              />
            </div>
            <div className="li">
              <a href="#home" onClick={() => setClicked((prev) => !prev)}>
                Home
              </a>
            </div>
            <div className="li">
              <a href="#about" onClick={() => setClicked((prev) => !prev)}>
                About
              </a>
            </div>
            <div className="li">
              <a href="#projects" onClick={() => setClicked((prev) => !prev)}>
                Projects
              </a>
            </div>
            <div className="li">
              <a href="#contact" onClick={() => setClicked((prev) => !prev)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : (
        <MainLayout clicked={clicked} setClicked={setClicked}>
          <Home />
          <About />
          <Project />
          <Contact />
        </MainLayout>
      )}
    </div>
  );
}

export default App;
