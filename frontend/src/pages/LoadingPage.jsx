import { FaSpinner } from "react-icons/fa";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-teal-100 text-gray-800">
      {/* Spinner */}
      <FaSpinner className="animate-spin text-indigo-600 text-6xl mb-4" />

      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">Just a moment...</h2>
      <p className="text-gray-600 text-center max-w-md">
        We're preparing your personalized mental wellness experience. Breathe in, breathe out. 🌿
      </p>
    </div>
  );
};

export default LoadingPage;
