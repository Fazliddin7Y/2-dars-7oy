import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../redux/getPosts";
import PostCard from "../components/PostCard";

export const Home = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(
          `https://nt-devconnector.onrender.com/api/auth`,
          {
            headers: { "x-auth-token": token },
          }
        );
        setUser(res.data);
      } catch (error) {
        console.error("Userni olishda xatolik:", error);
      }
    }

    fetchUser();
  }, [token]);

  const { data, error, isLoading, refetch } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  const handleLike = async (postId) => {
    try {
      await axios.put(
        `https://nt-devconnector.onrender.com/api/posts/like/${postId}`,
        {},
        { headers: { "x-auth-token": token } }
      );
      refetch();
    } catch (error) {
      console.error("Like bosishda xatolik:", error);
    }
  };

  const handleUnlike = async (postId) => {
    try {
      await axios.put(
        `https://nt-devconnector.onrender.com/api/posts/unlike/${postId}`,
        {},
        { headers: { "x-auth-token": token } }
      );
      refetch();
    } catch (error) {
      console.error("Unlike bosishda xatolik:", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `https://nt-devconnector.onrender.com/api/posts/${postId}`,
        { headers: { "x-auth-token": token } }
      );
      refetch();
    } catch (error) {
      console.error("Postni o‘chirishda xatolik:", error);
    }
  };

  return (
    <div className="w-[800px] mx-auto">
      <Link to="/addPosts">Add posts</Link>
      {data?.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          user={user}
          handleLike={handleLike}
          handleUnlike={handleUnlike}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Home;
