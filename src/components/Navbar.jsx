// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Mini Social
        </Link>
        <div className="space-x-4">
          <Link to="/newsfeed">Newsfeed</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </nav>
  );
}
