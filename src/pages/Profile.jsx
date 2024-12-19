// src/pages/Profile.jsx
export default function Profile() {
    const user = {
      name: "John Doe",
      bio: "Software Engineer | Tech Enthusiast",
      avatar: "/default-avatar.png",
    };
  
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
          <p className="text-gray-600 mt-2">{user.bio}</p>
          <div className="mt-6 space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded">
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
  