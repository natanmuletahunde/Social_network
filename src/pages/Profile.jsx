import { useAuth } from "../firebase"; // Custom hook to fetch user data

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md p-6 rounded">
        <div className="flex items-center space-x-4">
          <img
            src={user.photoURL || "/default-avatar.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.displayName || "Anonymous"}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">My Posts</h3>
          {/* Fetch and display user posts here */}
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Friends</h3>
          {/* Fetch and display friend list here */}
        </div>
      </div>
    </div>
  );
}
