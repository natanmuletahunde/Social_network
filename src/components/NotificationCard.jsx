/* eslint-disable react/prop-types */
// src/components/NotificationCard.jsx
export default function NotificationCard({ notification }) {
    return (
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <p>{notification.message}</p>
      </div>
    );
  }
  