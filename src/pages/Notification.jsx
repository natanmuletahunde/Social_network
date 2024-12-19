// src/pages/Notifications.jsx
import NotificationCard from "../components/NotificationCard";

export default function Notifications() {
  const notifications = [
    { id: 1, message: "Alice commented on your post." },
    { id: 2, message: "John liked your photo." },
    { id: 3, message: "You have a new friend request." },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Notifications</h1>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
}
