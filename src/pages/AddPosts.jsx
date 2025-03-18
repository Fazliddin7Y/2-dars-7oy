import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddPosts = () => {
  const [text, setText] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "https://nt-devconnector.onrender.com/api/posts",
        { text },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      navigate("/"); // Home sahifasiga qaytish
    } catch (error) {
      console.error("Post qo‘shishda xatolik:", error);
    }
  }

  return (
    <div className="w-[400px] mx-auto">
      <h2>Yangi post qo‘shish</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border"
          placeholder="Post matnini kiriting"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPosts;
