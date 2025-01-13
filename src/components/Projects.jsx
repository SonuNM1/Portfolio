import React from "react";
import project from "./Data/projects.json";
import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((data) => {
          return (
            <ProjectCard key={data.id} data={data} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
