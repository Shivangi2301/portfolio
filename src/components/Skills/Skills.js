import React from "react";
import "./Skills.css";
import { SKILLS } from "../../Util/data";

const Skills = () => {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <>
            {console.log("skill: ", skill)}
            <div key={skill.skillName}>
              <h3>{skill.skillName}</h3>
              {skill.skillList.map((skills) => (
                <div key={skills.name}>
                  <div className="img-container">
                    <img src={skills.svg} alt=""></img>
                    <i className={skills.icon}></i>
                  </div>
                  <h4>{skills.name}</h4>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Skills;
