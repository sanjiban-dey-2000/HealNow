import { Outlet, Link } from "react-router-dom";
import { FaUserFriends, FaRegComments, FaPlusCircle } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold text-indigo-600">HealNow</h2>
          <p className="text-sm text-gray-500 mt-1">{user?.fullName}</p>
        </div>
        <nav className="p-4 space-y-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-500"
          >
            <FaUserFriends /> Feed
          </Link>
          <Link
            to="/dashboard/post"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-500"
          >
            <FaPlusCircle /> Post Story
          </Link>
          <Link
            to="/dashboard/therapists"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-500"
          >
            <FaRegComments /> Therapists
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div>
            <span className="text-sm text-gray-600">{user?.email}</span>
          </div>
        </header>

        {/* Outlet for nested routes */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Floating Mental Health Chatbot Icon */}
      <Link
        to="/dashboard/chat"
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition"
      >
        <AiOutlineRobot size={24} />
      </Link>
    </div>
  );
};

export default DashboardLayout;
