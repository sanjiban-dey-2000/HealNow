import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUserFriends,
  FaRegComments,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserEdit,
  FaClipboardList,
} from "react-icons/fa";
import PostStoryModal from "./PostStoryModal";

const DashboardHeader = ({ onPostCreated }) => {
  const [postModalOpen, setPostModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinkClasses = (path) =>
    `hover:text-indigo-400 ${
      location.pathname === path ? "text-indigo-400" : ""
    } text-base md:text-lg font-medium`;

  return (
    <>
      {/* LEFT SIDEBAR (Desktop) */}
      <aside className="hidden md:flex md:fixed md:top-0 md:bottom-0 md:left-0 w-80 bg-gradient-to-b from-gray-900 via-gray-800 via-slate-700 to-black p-6 border-r border-gray-800 flex-col justify-between z-10">
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src={user?.avatar || "/avatar.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
            />
            <h2 className="mt-3 text-lg md:text-xl font-semibold">
              {user?.fullName}
            </h2>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col gap-5">
            <Link to="/dashboard" className={navLinkClasses("/dashboard")}>
              <FaUserFriends className="inline mr-2" /> Feed
            </Link>

            <Link to="/dashboard/myposts" className={navLinkClasses("/dashboard/myposts")}>
              <FaClipboardList className="inline mr-2" /> My Posts
            </Link>

            <button
              onClick={() => setPostModalOpen(true)}
              className="hover:text-indigo-400 text-left text-base md:text-lg font-medium"
            >
              <FaPlusCircle className="inline mr-2" /> Post Story
            </button>

            <Link
              to="/dashboard/therapists"
              className={navLinkClasses("/dashboard/therapists")}
            >
              <FaRegComments className="inline mr-2" /> Therapists
            </Link>

            <Link
              to="/dashboard/update-profile"
              className={navLinkClasses("/dashboard/update-profile")}
            >
              <FaUserEdit className="inline mr-2" /> Update Profile
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-400 hover:text-red-500 font-medium text-base md:text-lg flex items-center"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </aside>

      {/* BOTTOM NAVBAR (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black border-t border-gray-800 flex justify-around items-center py-2 z-50">
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
          to="/dashboard/myposts"
          className={`flex flex-col items-center text-sm ${
            location.pathname === "/dashboard/myposts"
              ? "text-indigo-400"
              : "text-gray-300"
          }`}
        >
          <FaClipboardList size={18} />
          My Posts
        </Link>

        <div
          onClick={() => setPostModalOpen(true)}
          className="flex flex-col items-center text-sm cursor-pointer"
        >
          <FaPlusCircle size={18} />
          Post
        </div>

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

      {/* POST STORY MODAL */}
      <PostStoryModal
        isOpen={postModalOpen}
        onClose={() => setPostModalOpen(false)}
        onPostCreated={onPostCreated}
      />
    </>
  );
};

export default DashboardHeader;
