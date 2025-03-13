import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/Home.css';

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get('https://nt-devconnector.onrender.com/api/profile')
      .then(response => setProfiles(response.data))
      .catch(error => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Developers</h1>
      <div className="profile-grid">
        {profiles.map(profile => (
          <div key={profile._id} className="profile-card">
            <h2 className="profile-name">{profile.user.name}</h2>
            <p className="profile-text">{profile.status} - {profile.company}</p>
            <Link to={`/profile/${profile._id}`} className="profile-button">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
