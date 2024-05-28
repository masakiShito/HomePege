import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../assets/styles/bloglist.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/blogposts/")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog posts!", error);
      });
  }, []);

  return (
    <motion.div
      className="blog-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Latest Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>By {post.author.username}</p>
            <p>{post.created_at}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default BlogList;
