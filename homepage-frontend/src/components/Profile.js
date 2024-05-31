import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CareerTimeline from "./CareerTimeline";
import PieChartComponent from "./PieChartComponent";
import "../assets/styles/profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/profiles/1/");
      const data = await response.json();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  const NextArrow = ({ onClick }) => (
    <button className="arrow-button arrow-right" onClick={onClick}>
      &gt;
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button className="arrow-button arrow-left" onClick={onClick}>
      &lt;
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // 自動再生を有効にする
    autoplaySpeed: 3000, // 3秒ごとにスライド
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="profile-container">
      <Slider {...settings}>
        <div className="section">
          <div className="profile-header">
            <img
              src={`${profile.profile_picture}`}
              alt="Profile"
              className="profile-picture"
            />
            <h2 className="profile-name">{profile.user.username}</h2>
          </div>
        </div>

        <div className="section">
          <div className="profile-body">
            <h3 className="section-title">About Me</h3>
            <p className="profile-description">{profile.bio}</p>
          </div>
        </div>

        <div className="section">
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
        </div>

        <div className="section">
          <div className="profile-body">
            <h3 className="section-title">Experience</h3>
            <div className="timeline-container">
              <CareerTimeline careers={profile.careers} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Profile;
