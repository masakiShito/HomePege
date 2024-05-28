import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import "../assets/styles/header.css";

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        <h1 className="site-title">とあるエンジニアのサイト</h1>
        <nav className="nav-links">
          <Link
            to="profileSection"
            smooth={true}
            duration={1000}
            className="nav-link"
          >
            Profile
          </Link>
          <Link
            to="careerSection"
            smooth={true}
            duration={1000}
            className="nav-link"
          >
            Career
          </Link>
          <Link
            to="blogSection"
            smooth={true}
            duration={1000}
            className="nav-link"
          >
            Blog
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
