import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUserFriends,
  FaRegComments,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserEdit,
} from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { sendChatBotmsg } from "../../services/axiosInstance";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
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

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0e0e0e] text-white relative">
      {/* Left Sidebar (Desktop Only) */}
      <aside className="hidden md:flex md:fixed md:top-0 md:bottom-0 md:left-0 w-80 bg-[#1a1a1a] p-6 border-r border-gray-800 flex-col justify-between z-10">
        <div>
          <div className="flex flex-col items-center">
            <img
              src="/avatar.png"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{user?.fullName}</h2>
          </div>
          <nav className="mt-8 flex flex-col gap-5 text-base font-medium">
            <Link to="/dashboard" className="hover:text-indigo-400">
              <FaUserFriends className="inline mr-2" /> Feed
            </Link>
            <Link to="/dashboard/post" className="hover:text-indigo-400">
              <FaPlusCircle className="inline mr-2" /> Post Story
            </Link>
            <Link to="/dashboard/therapists" className="hover:text-indigo-400">
              <FaRegComments className="inline mr-2" /> Therapists
            </Link>
            <Link
              to="/dashboard/update-profile"
              className="hover:text-indigo-400"
            >
              <FaUserEdit className="inline mr-2" /> Update Profile
            </Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="text-red-400 hover:text-red-500 font-medium text-base flex items-center"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 md:mr-96 p-4 pt-6 overflow-y-auto">
        <header className="mb-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-400 ml-[70px]">Feed</h1>
          <span className="text-sm mr-3 text-gray-400 hidden md:block">
            {user?.email}
          </span>
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

      {/* Bottom Navbar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 flex justify-around items-center py-2 z-50">
        <Link
          to="/dashboard"
          className={`flex flex-col items-center text-sm ${
            location.pathname === "/dashboard"
              ? "text-indigo-400"
              : "text-gray-300"
          }`}
        >
          <FaUserFriends size={18} />
          Feed
        </Link>
        <Link
          to="/dashboard/post"
          className={`flex flex-col items-center text-sm ${
            location.pathname === "/dashboard/post"
              ? "text-indigo-400"
              : "text-gray-300"
          }`}
        >
          <FaPlusCircle size={18} />
          Post
        </Link>
        <Link
          to="/dashboard/therapists"
          className={`flex flex-col items-center text-sm ${
            location.pathname === "/dashboard/therapists"
              ? "text-indigo-400"
              : "text-gray-300"
          }`}
        >
          <FaRegComments size={18} />
          Chat
        </Link>
        <Link
          to="/dashboard/update-profile"
          className={`flex flex-col items-center text-sm ${
            location.pathname === "/dashboard/update-profile"
              ? "text-indigo-400"
              : "text-gray-300"
          }`}
        >
          <FaUserEdit size={18} />
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-sm text-red-400"
        >
          <FaSignOutAlt size={18} />
          Logout
        </button>
      </nav>

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
  );
};

export default DashboardLayout;
