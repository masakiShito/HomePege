import React from 'react';
import Profile from '../components/Profile';
import BlogList from '../components/BlogList';

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Homepage</h1>
      </header>
      <Profile />
      <BlogList />
    </div>
  );
};

export default HomePage;
