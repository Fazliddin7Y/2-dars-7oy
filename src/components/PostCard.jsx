import React from "react";

const PostCard = ({ post, user, handleLike, handleUnlike, handleDelete }) => {
  return (
    <div className="border my-2 p-2">
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
  );
};

export default PostCard;
