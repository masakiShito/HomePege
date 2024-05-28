import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/BlogList.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/blogposts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blog posts!', error);
      });
  }, []);

  return (
    <div className="blog-list">
      <h1>Latest Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By {post.author.username}</p>
            <p>{post.created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
