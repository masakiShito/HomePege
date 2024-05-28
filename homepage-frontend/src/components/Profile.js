import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/profiles/1/')
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the profile!', error);
      });
  }, []);

  return (
    <div className="profile">
      {profile ? (
        <div>
          <img src={profile.profile_picture} alt="Profile" />
          <h1>{profile.user.username}</h1>
          <p>{profile.bio}</p>
          <a href={profile.website}>Website</a>
          
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              {profile.skills.map(skill => (
                <li key={skill.id}>{skill.name}: {skill.level}</li>
              ))}
            </ul>
          </div>
          
          <div className="careers">
            <h2>Career History</h2>
            <ul>
              {profile.careers.map(career => (
                <li key={career.id}>
                  <strong>{career.company}</strong> - {career.position}
                  <p>{career.description}</p>
                  <p>{career.start_date} - {career.end_date ? career.end_date : 'Present'}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
