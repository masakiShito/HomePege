import React from 'react';
import { Link } from 'react-scroll';
import '../assets/styles/header.css';

const Header = () => {
  return (
    <header>
      <h1>とあるエンジニアのサイト</h1>
      <nav>
        <Link to="profileSection" smooth={true} duration={1000}>Profile</Link>
        <Link to="careerSection" smooth={true} duration={1000}>Career</Link>
        <Link to="blogSection" smooth={true} duration={1000}>Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
