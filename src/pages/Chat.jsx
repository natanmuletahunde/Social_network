// src/pages/Chat.jsx
export default function Chat() {
    const messages = [
      { id: 1, sender: "Alice", text: "Hey, how are you?" },
      { id: 2, sender: "You", text: "I'm good, thanks! How about you?" },
    ];
  
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Chat</h1>
          <div className="bg-white rounded shadow-md p-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 ${
                  msg.sender === "You" ? "text-right" : "text-left"
                }`}
              >
                <p className="font-bold">{msg.sender}</p>
                <p className="text-gray-600">{msg.text}</p>
              </div>
            ))}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  