import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaUserFriends,
  FaRegComments,
  FaPlusCircle,
  FaSignOutAlt,
  FaUserEdit,
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

  return (
    <>
      {/* LEFT SIDEBAR (Desktop) */}
      <aside className="hidden md:flex md:fixed md:top-0 md:bottom-0 md:left-0 w-80 bg-[#1a1a1a] p-6 border-r border-gray-800 flex-col justify-between z-10">
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <img
              src={user?.avatar || "/avatar.png"}
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
            />
            <h2 className="mt-3 text-lg font-semibold">{user?.fullName}</h2>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex flex-col gap-5 text-base font-medium">
            <Link
              to="/dashboard"
              className={`hover:text-indigo-400 ${
                location.pathname === "/dashboard" ? "text-indigo-400" : ""
              }`}
            >
              <FaUserFriends className="inline mr-2" /> Feed
            </Link>

            <button
              onClick={() => setPostModalOpen(true)}
              className="hover:text-indigo-400 text-left"
            >
              <FaPlusCircle className="inline mr-2" /> Post Story
            </button>

            <Link
              to="/dashboard/therapists"
              className={`hover:text-indigo-400 ${
                location.pathname === "/dashboard/therapists"
                  ? "text-indigo-400"
                  : ""
              }`}
            >
              <FaRegComments className="inline mr-2" /> Therapists
            </Link>

            <Link
              to="/dashboard/update-profile"
              className={`hover:text-indigo-400 ${
                location.pathname === "/dashboard/update-profile"
                  ? "text-indigo-400"
                  : ""
              }`}
            >
              <FaUserEdit className="inline mr-2" /> Update Profile
            </Link>
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="text-red-400 hover:text-red-500 font-medium text-base flex items-center"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </aside>

      {/* BOTTOM NAVBAR (Mobile) */}
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
