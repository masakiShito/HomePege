import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
