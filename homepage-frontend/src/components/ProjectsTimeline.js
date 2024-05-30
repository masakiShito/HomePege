// src/components/ProjectsTimeline.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faUserTie,
  faCalendarAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/projectsTimeline.css";

const ProjectsTimeline = () => {
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
    <div className="timeline-container">
      <h2>Projects Timeline</h2>
      <VerticalTimeline>
        {projects.map((project) => (
          <VerticalTimelineElement
            key={project.id}
            iconStyle={{ background: "rgb(76, 175, 80)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
          >
            <div className="timeline-date">
              <FontAwesomeIcon icon={faCalendarAlt} /> {project.start_date} -{" "}
              {project.end_date || "Present"}
            </div>
            <h3 className="vertical-timeline-element-title">{project.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              <FontAwesomeIcon icon={faUserTie} /> {project.position}
            </h4>
            <p>
              <strong>
                <FontAwesomeIcon icon={faTasks} /> Phases:
              </strong>{" "}
              {project.phases}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ProjectsTimeline;
