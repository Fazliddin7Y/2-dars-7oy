import { useGetProfilesQuery, useDeleteProfileMutation } from "../redux/api";

const Profiles = () => {
  const { data: profiles, error, isLoading } = useGetProfilesQuery();
  const [deleteProfile] = useDeleteProfileMutation();

  if (isLoading) return <p>Loading profiles...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <div>
      <h1>Profiles</h1>
      {profiles?.map((profile) => (
        <div key={profile._id} className="border p-2">
          <h3>{profile.name}</h3>
          <button onClick={() => deleteProfile(profile._id)}>O‘chirish</button>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
