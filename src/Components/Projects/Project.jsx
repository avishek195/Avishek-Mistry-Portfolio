import React from "react";
import jokeTeller from "../../assets/images/joke_teller.png";
import pokemon from "../../assets/images/Pokemon.png";
import musicPlayer from "../../assets/images/music-player.png";
import ecommerceSite from "../../assets/images/shooping-site.png";
import coustomCountdown from "../../assets/images/custom-countdown.png";
import pictureInPicture from "../../assets/images/picture-in-picture.png";
import "./project.css";

import liveIcon from "../../assets/icons/live.png";
import codeIcon from "../../assets/icons/application.png";

const Project = () => {
  const data = [
    {
      title: "Joke Teller",
      imgSrc: jokeTeller,
      sourceLink: "https://github.com/avishek195/joke-teller-using-javascript",
      liveLink: "https://avishek195.github.io/joke-teller-using-javascript",
    },
    {
      title: "Pokemon Card",
      imgSrc: pokemon,
      sourceLink: "https://github.com/avishek195/pokemon-card",
      liveLink: "https://main--avipokedex.netlify.app/",
    },
    {
      title: "Music Player",
      imgSrc: musicPlayer,
      sourceLink: "https://github.com/avishek195/music-player",
      liveLink: "https://avishek195.github.io/music-player/",
    },
    {
      title: "E-commerce Website",
      imgSrc: ecommerceSite,
      sourceLink: "https://github.com/avishek195/React-Card-Project",
      liveLink: "https://eclectic-torrone-365ea9.netlify.app/",
    },
    {
      title: "Custom Countdown",
      imgSrc: coustomCountdown,
      sourceLink: "https://github.com/avishek195/custom-countdown",
      liveLink: "https://avishek195.github.io/custom-countdown/",
    },
    {
      title: "Picture In Picture",
      imgSrc: pictureInPicture,
      sourceLink:
        "https://github.com/avishek195/picture-in-picture-using-javascript",
      liveLink:
        "https://avishek195.github.io/picture-in-picture-using-javascript/",
    },
  ];
  return (
    <>
      {/* <h1>Projects</h1> */}
      {/* <div className="">
        <h1>Projects</h1>
      </div> */}

      <div className="project-container" id="projects">
        {data.map((item, id) => {
          return (
            <div key={id} className="project-card">
              <img src={item.imgSrc} alt="projects" />
              <h2>{item.title}</h2>
              <div className="btns">
                <button className="source-btn">
                  {" "}
                  <a href={item.sourceLink} target="_blank">
                    Source Code
                  </a>
                  <span>
                    <img src={codeIcon} alt="live" />
                  </span>
                </button>
                <button className="live-btn">
                  <a href={item.liveLink} target="_blank" className="live-link">
                    Live{" "}
                  </a>
                  <span>
                    <img src={liveIcon} alt="live" />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
