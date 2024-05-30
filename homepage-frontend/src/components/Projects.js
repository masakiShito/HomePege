// src/components/Projects.js

import React from "react";
import "../assets/styles/projects.css";

const projectsData = [
  {
    title: "Project One",
    description: "Description for project one.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    link: "#",
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
