import React from "react";
import jokeTeller from "../../assets/images/joke_teller.png";
import pokemon from "../../assets/images/Pokemon.png";
import musicPlayer from "../../assets/images/music-player.png";
import ecommerceSite from "../../assets/images/shooping-site.png";
import "./project.css";

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
            <div className="project-card">
              <img src={item.imgSrc} alt="projects" />
              <h2>{item.title}</h2>
              <div className="btns">
                <button className="source-btn">
                  {" "}
                  <a href={item.sourceLink} target="_blank">
                    Source Code
                  </a>
                </button>
                <button className="live-btn">
                  <a href={item.liveLink} target="_blank">
                    Live
                  </a>
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
