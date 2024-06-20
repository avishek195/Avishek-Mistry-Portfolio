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
          <ul className="nav-links">
            <li>
              <FaTimes
                className="menu"
                onClick={() => setClicked((prev) => !prev)}
              />
            </li>
            <li>
              <a href="#home" onClick={() => setClicked((prev) => !prev)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setClicked((prev) => !prev)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setClicked((prev) => !prev)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setClicked((prev) => !prev)}>
                Contact
              </a>
            </li>
          </ul>
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
