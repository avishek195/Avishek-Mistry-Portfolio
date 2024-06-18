import React from "react";
// import bugFixer from "../../"
import bugFixer from "../../assets/images/bug_fixer.svg";
import logicBuilder from "../../assets/images/logic_builder.svg";
import webDeveloper from "../../assets/images/web_developer.svg";
import openSource from "../../assets/images/open_source.svg";
import versionControl from "../../assets/images/version_control.svg";
import mobileDevelopment from "../../assets/images/mobile_development.svg";
import "./about.css";
const About = () => {
  const skill = [
    {
      src: bugFixer,
      title: "Bug Fixer",
    },
    {
      src: logicBuilder,
      title: "Logic Builder",
    },
    {
      src: webDeveloper,
      title: "Web Developer",
    },
    {
      src: openSource,
      title: "Open Source",
    },
    {
      src: versionControl,
      title: "VS Coder",
    },
    {
      src: mobileDevelopment,
      title: "Mobile Developer",
    },
  ];
  return (
    <div className="about-container" id="about">
      <div className="skills">
        {skill.map((item, id) => {
          return (
            <div key={id} className="skill-card">
              <img src={item.src} alt="skills" />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
