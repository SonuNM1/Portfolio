import React from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data, index) => {
            return (
              <>
                <div
                  className="item"
                  key={data.id}
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={`${index * 100}`}
                >
                  <img src={`/assets/${data.imageSrc}`} alt="skill" />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
