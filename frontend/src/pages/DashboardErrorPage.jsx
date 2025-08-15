// DashboardErrorPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const DashboardErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      {/* Animated SVG Illustration */}
      <div className="mb-8 animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-40 w-40 text-purple-400 drop-shadow-lg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376a9 9 0 1118.607 0A17.933 17.933 0 0112 21a17.933 17.933 0 01-9.303-4.874z"
          />
        </svg>
      </div>

      {/* Error Code */}
      <h1 className="text-6xl font-extrabold text-purple-400 drop-shadow-lg">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-semibold mt-4 mb-2 text-center">
        Oops! Page Not Found
      </h2>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-md text-center mb-6">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back to where you were.
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 transition-all rounded-full shadow-lg hover:shadow-xl"
      >
        <FiArrowLeft className="text-lg" />
        Go Back
      </button>
    </div>
  );
};

export default DashboardErrorPage;
