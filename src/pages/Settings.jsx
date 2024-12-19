// src/pages/Settings.jsx
export default function Settings() {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          <form className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter a new password"
              />
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    );
  }
  