/* eslint-disable react/prop-types */
// src/components/FriendCard.jsx
export default function FriendCard({ friend }) {
    return (
      <div className="flex items-center space-x-4 bg-white p-4 rounded shadow-md">
        <img
          src={friend.avatar || "/default-avatar.png"}
          alt={friend.name}
          className="w-12 h-12 rounded-full"
        />
        <p>{friend.name}</p>
      </div>
    );
  }
  