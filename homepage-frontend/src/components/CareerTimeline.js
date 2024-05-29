import React from "react";
import "../assets/styles/timeline.css";

const CareerTimeline = ({ careers }) => {
  return (
    <div className="timeline">
      {careers.map((career, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>
              {career.company}, {career.position}
            </h4>
            <p className="dates">
              {career.start_date} 〜 {career.end_date}
            </p>
            <p>{career.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerTimeline;
