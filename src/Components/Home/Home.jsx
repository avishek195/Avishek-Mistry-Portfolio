import React from "react";

import homePagePic from "../../assets/images/homePageMainImage.png";
// import homePagePic from "../../../public/";
// import pdf from "";
import "./home.css";
const Home = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1bsYQmgWMGrXk6JnjBNqTDSIQ990UpP3y/view?usp=sharing";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
            Google Firebase. Additionally, I have extensive experience in
            backend development, including building RESTful APIs with Express.js
            and Node.js.
          </p>
          <button onClick={downloadCV}>Download CV</button>
        </div>
      </div>
      <div className="right-content">
        <img src={homePagePic} alt="Demo Picture" />
      </div>
    </div>
  );
};

export default Home;
