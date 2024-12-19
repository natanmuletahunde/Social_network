/* eslint-disable react/prop-types */
// src/components/PostCard.jsx
import { useState } from "react";

export default function PostCard({ post }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 space-y-4 transition-all transform hover:scale-105 hover:shadow-2xl w-[calc(33.333%-1.5rem)]">
      {/* Image */}
      <div className="w-full h-48 relative">
        <img
          src={post.image}
          alt={post.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      {/* Name */}
      <h2 className="text-lg font-semibold">{post.name}</h2>
      {/* Description */}
      <p className="text-gray-600">{post.description}</p>
      {/* Like and Dislike Buttons */}
      <div className="flex justify-between items-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          onClick={handleLike}
        >
          Like {likes}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          onClick={handleDislike}
        >
          Dislike {dislikes}
        </button>
      </div>
    </div>
  );
}
