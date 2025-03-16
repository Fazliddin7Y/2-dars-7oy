import axios from "axios";
import React, { useState } from "react";

const AddPosts = ({ getPosts }) => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    axios
      .post(
        `https://nt-devconnector.onrender.com/api/posts`,
        { text },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => getPosts());
    setText("");
  }
  return (
    <div>
      <h2>AddPosts</h2>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button>yuborish</button>
      </form>
    </div>
  );
};

export default AddPosts;
