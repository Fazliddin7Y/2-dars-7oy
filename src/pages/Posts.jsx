import { useGetPostsQuery, useDeletePostMutation } from "../redux/api";

const Posts = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Xatolik yuz berdi: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <div key={post._id} className="border p-2">
          <h3>{post.title}</h3>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
