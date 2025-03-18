import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../redux/getPosts";

export const Home = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(
          `https://nt-devconnector.onrender.com/api/auth`,
          {
            headers: {
              "x-auth-token": token,
            },
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

  // ✅ LIKE FUNCTION
  async function handleLike(postId) {
    try {
      await axios.put(
        `https://nt-devconnector.onrender.com/api/posts/like/${postId}`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      refetch(); // Ma'lumotlarni yangilash
    } catch (error) {
      console.error("Like bosishda xatolik:", error);
    }
  }

  // ✅ UNLIKE FUNCTION
  async function handleUnlike(postId) {
    try {
      await axios.put(
        `https://nt-devconnector.onrender.com/api/posts/unlike/${postId}`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      refetch();
    } catch (error) {
      console.error("Unlike bosishda xatolik:", error);
    }
  }

  // ✅ DELETE FUNCTION
  async function handleDelete(postId) {
    try {
      await axios.delete(
        `https://nt-devconnector.onrender.com/api/posts/${postId}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      refetch();
    } catch (error) {
      console.error("Postni o‘chirishda xatolik:", error);
    }
  }

  return (
    <div className="w-[800px] mx-auto">
      <Link to="/addPosts">Add posts</Link>
      {data?.map((post) => (
        <div className="border my-2 p-2" key={post._id}>
          <h2>{post.name}</h2>
          <h3>{post.text}</h3>

          <button onClick={() => handleLike(post._id)}>
            Like ({post.likes.length})
          </button>

          <button onClick={() => handleUnlike(post._id)}>Unlike</button>

          {post.user === user?._id && (
            <button onClick={() => handleDelete(post._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
