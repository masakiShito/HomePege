import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../assets/styles/career.css";

const Career = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/careers/")
      .then((response) => {
        setCareers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the careers!", error);
      });
  }, []);

  return (
    <motion.div
      className="career"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Career History</h2>
      <ul>
        {careers.map((career) => (
          <li key={career.id}>
            <strong>{career.company}</strong> - {career.position}
            <p>{career.description}</p>
            <p>
              {career.start_date} -{" "}
              {career.end_date ? career.end_date : "Present"}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Career;
