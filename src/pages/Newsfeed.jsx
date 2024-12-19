// src/pages/Newsfeed.jsx
import PostCard from "../components/PostCard";

export default function Newsfeed() {
  const posts = [
    { id: 1, title: "First Post", content: "This is my first post!" },
    { id: 2, title: "Second Post", content: "Welcome to the network!" },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Newsfeed</h1>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
