/* eslint-disable react/prop-types */
// src/components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <div className="bg-white shadow-md p-4 rounded mb-4">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-gray-600">{post.content}</p>
    </div>
  );
}
