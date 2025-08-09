import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineRobot } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { sendChatBotmsg } from "../../services/axiosInstance";
import DashboardHeader from "../ui/DashboardHeader";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "user", text: "I'm feeling stressed." },
    {
      sender: "ai",
      text: "Try mindfulness meditation or light exercises to reduce stress.",
    },
  ]);

  const handleSendMessage = async () => {
    try {
      const res = await sendChatBotmsg(message);
      console.log(res.data?.reply);
      if (message.trim()) {
        setChatHistory((prev) => [
          ...prev,
          { sender: "user", text: message },
          {
            sender: "ai",
            text: res.data?.reply,
          },
        ]);

        setMessage("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            fontSize: "18px",
            color: "#713200",
          },
        }}
      />
      <div className="min-h-screen flex flex-col md:flex-row bg-[#0e0e0e] text-white relative">
        {/* Left Sidebar (Desktop Only) */}
        <DashboardHeader/>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 md:mr-96 p-4 pt-6 overflow-y-auto">
          <header className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-400 ml-[70px]">
              Feed
            </h1>
          </header>
          <Outlet />
        </main>

        {/* Right Chat Panel (Desktop Only) */}
        <aside className="hidden lg:flex fixed top-0 right-0 bottom-0 w-100 bg-[#1a1a1a] border-l border-gray-800 p-4 flex-col justify-between z-10">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <AiOutlineRobot className="text-indigo-400 text-2xl" />
              <h3 className="text-xl font-semibold text-indigo-300">
                Aurix-AI Mental Chat
              </h3>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1 text-[15px]">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg max-w-[85%] ${
                    msg.sender === "user"
                      ? "bg-indigo-500 self-end ml-auto"
                      : "bg-gray-700 self-start mr-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <input
                type="text"
                name="message"
                placeholder="Ask something..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="w-full px-4 py-3 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition text-base"
              >
                Send
              </button>
            </div>
          </div>
        </aside>

        {/* AI Chat Icon (Mobile) */}
        <button
          onClick={() =>
            alert("AI Chatbot works on desktop! Enable it soon for mobile too.")
          }
          className="md:hidden fixed bottom-16 right-4 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg"
        >
          <AiOutlineRobot size={24} />
        </button>
      </div>
    </>
  );
};

export default DashboardLayout;
