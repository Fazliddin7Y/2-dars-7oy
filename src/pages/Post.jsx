import { useParams } from "react-router-dom";
import { useGetPostQuery } from "../redux/api";

const Post = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useGetPostQuery(id);

  if (isLoading) return <p>Loading post...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
