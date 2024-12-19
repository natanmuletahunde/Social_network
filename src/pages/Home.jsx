import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Mini Social</h1>
      <p className="mt-4 text-lg text-gray-600">
        Connect, share, and chat with your friends!
      </p>
      <div className="mt-6 flex gap-4">
        <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded">
          Login
        </Link>
        <Link to="/signup" className="px-6 py-2 bg-green-500 text-white rounded">
          Signup
        </Link>
      </div>
    </div>
  );
}
