import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../assets/styles/profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/profiles/1/")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile!", error);
      });
  }, []);

  return (
    <motion.div
      className="profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {profile ? (
        <div>
          <img src={profile.profile_picture} alt="Profile" />
          <h1>{profile.user.username}</h1>
          <p>{profile.bio}</p>
          <a href={profile.website}>Website</a>

          <div className="skills">
            <h2>Skills</h2>
            <ul>
              {profile.skills.map((skill) => (
                <li key={skill.id}>
                  {skill.name}: {skill.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </motion.div>
  );
};

export default Profile;
