import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/styles/profile.css";
import CareerTimeline from "./CareerTimeline";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profiles/1/") // DjangoサーバーのURLを使用
      .then((response) => {
        console.log(response.data); // デバッグのためにデータをログ出力
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={`${profile.profile_picture}`}
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="profile-name">{profile.user.username}</h2>
        <p className="profile-title">{profile.bio}</p>
      </div>
      <div className="profile-body">
        <h3 className="section-title">About Me</h3>
        <p className="profile-description">{profile.bio}</p>
        <h3 className="section-title">Skills</h3>
        <ul className="skills-list">
          {profile.skills.map((skill) => (
            <li key={skill.id} className="skill-item">
              {skill.name}: <span className="skill-level">{skill.level}%</span>
            </li>
          ))}
        </ul>
        <h3 className="section-title">Experience</h3>
        <CareerTimeline careers={profile.careers} />
      </div>
    </div>
  );
};

export default Profile;
