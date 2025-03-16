import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPosts from "./AddPosts";
import './styles/Home.css';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  async function getPosts() {
    const posts = await axios.get(
      `https://nt-devconnector.onrender.com/api/posts`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setPosts(posts.data);
  }

  const [userMe, setuserMe] = useState(null);
  async function getMe() {
    const posts = await axios.get(
      `https://nt-devconnector.onrender.com/api/auth`,
      {
        headers: {
          "x-uath-token": token,
        },
      }
    );
  }

  console.log(userMe);
  

  useEffect(() => {
    getPosts();
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then(() => {
        getPosts();
      });
  }

  return (
    <div className="w-[300px] mx-auto ">
      <AddPosts getPosts={getPosts}/>
      {posts.map((post) => {
        return (
          <div className="border my-2 p-2" key={post._id}>
            <h2>{post.name}</h2>
            <h2>{post.text}</h2>

            {post?.user === userMe && (
              <button></button>
            )}
          </div>

        )
      })}
    </div>
  );
  
};

export default Home;