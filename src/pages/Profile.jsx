import { useParams } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api";

const Profile = () => {
  const { id } = useParams();
  const { data: profile, error, isLoading } = useGetProfileQuery(id);

  if (isLoading) return <p>Loading profile...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
    </div>
  );
};

export default Profile;
