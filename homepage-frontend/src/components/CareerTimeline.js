import React from "react";
import "../assets/styles/careerTimeline.css";

const CareerTimeline = ({ careers }) => {
  return (
    <ul className="timeline">
      {careers.map((career, index) => (
        <li key={career.id} className="timeline-item">
          <div className="timeline-content">
            <h4>
              {career.company}, {career.position}
            </h4>
            <p className="dates">
              {career.start_date} 〜 {career.end_date || "現在"}
            </p>
            <p>{career.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CareerTimeline;
