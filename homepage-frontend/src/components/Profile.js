import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "../assets/styles/profile.css";
import CareerTimeline from "./CareerTimeline";
import PieChartComponent from "./PieChartComponent";

const ProfilePage = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.5, // ビューポートの50％が表示されるとトリガー
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.div className="page" ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

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
      <ProfilePage>
        <div className="profile-header">
          <img
            src={`${profile.profile_picture}`}
            alt="Profile"
            className="profile-picture"
          />
          <h2 className="profile-name">{profile.user.username}</h2>
        </div>
      </ProfilePage>
      <ProfilePage>
        <div className="profile-body">
          <h3 className="section-title">About Me</h3>
          <p className="profile-description">{profile.bio}</p>
        </div>
      </ProfilePage>
      <ProfilePage>
        <div className="profile-body">
          <h3 className="section-title">Skills</h3>
          <div className="skills-list">
            {profile.skills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <h4>{skill.name}</h4>
                <PieChartComponent skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </ProfilePage>
      <ProfilePage>
        <div className="profile-body">
          <h3 className="section-title">Experience</h3>
          <div className="timeline-container">
            <CareerTimeline careers={profile.careers} />
          </div>
        </div>
      </ProfilePage>
    </div>
  );
};

export default Profile;
