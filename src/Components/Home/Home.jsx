import React from "react";

import homePagePic from "../../assets/images/homePageMainImage.png";
import "./home.css";
const Home = () => {
  return (
    <div className="home-conatiner">
      <div className="left-content">
        <div className="content">
          <h1>
            Welcome <span>Everyone</span>{" "}
          </h1>
          <p>
            Hello! I'm Avishek Mistry, a passionate web developer with hands-on
            experience in modern web technologies. I specialize in creating
            responsive and dynamic web applications using React, Node.js, and
            Google Firebase.
          </p>
          <button>Download CV</button>
        </div>
      </div>
      <div className="right-content">
        <img src={homePagePic} alt="Demo Picture" />
      </div>
    </div>
  );
};

export default Home;
