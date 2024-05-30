// src/components/Projects.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../assets/styles/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Phases:</strong> {project.phases}
            </p>
            <p>
              <strong>Position:</strong> {project.position}
            </p>
            <p>
              <strong>Start Date:</strong> {project.start_date}
            </p>
            {project.end_date && (
              <p>
                <strong>End Date:</strong> {project.end_date}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
