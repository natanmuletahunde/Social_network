/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const PostCard = ({ content, createdBy, createdAt }) => {
  return (
    <div className="bg-gray-100 p-4 mb-4 rounded shadow">
      <p>{content}</p>
      <p className="text-sm text-gray-500">By: {createdBy}</p>
      <p className="text-sm text-gray-500">{createdAt?.toDate().toString()}</p>
    </div>
  );
};

export default PostCard;
