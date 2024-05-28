import React from 'react';
import { Link } from 'react-scroll';
import '../assets/styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">とあるエンジニアのサイト</h1>
        <nav className="nav-links">
          <Link to="profileSection" smooth={true} duration={1000} className="nav-link">Profile</Link>
          <Link to="careerSection" smooth={true} duration={1000} className="nav-link">Career</Link>
          <Link to="blogSection" smooth={true} duration={1000} className="nav-link">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
