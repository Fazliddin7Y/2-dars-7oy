import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './styles/ProfileDetails.css';


function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://nt-devconnector.onrender.com/api/profile/${id}`)
      .then(response => {
        setProfile(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profile details:', error);
        setError('Profile not found.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!profile || !profile.user) {
    return <p className="text-center text-white">No profile data available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">{profile.user.name}</h1>
      <p className="text-lg text-gray-400">{profile.status} at {profile.company}</p>
      <h3 className="text-lg font-semibold mt-4">Skills:</h3>
      <ul className="mt-2 flex flex-col items-center">
        {profile.skills.map((skill, index) => (
          <li key={index} className="bg-green-500 text-white px-3 py-1 rounded-md m-1">{skill}</li>
        ))}
      </ul>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md">Back to Home</Link>
    </div>
  );
}

export default ProfileDetails;
