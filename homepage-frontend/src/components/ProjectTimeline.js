import React from "react";
import "../assets/styles/projectTimeline.css";

const ProjectTimeline = ({ projects }) => {
  return (
    <div className="timeline-container">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-content">
            <h4 className="project-name">{project.name}</h4>
            <p className="project-description">{project.description}</p>
            <p>
              <strong>Phases:</strong> {project.phases}
            </p>
            <p>
              <strong>Position:</strong> {project.position}
            </p>
            <p>
              {project.start_date} - {project.end_date || "Present"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTimeline;
