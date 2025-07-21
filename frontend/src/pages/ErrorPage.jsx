import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-tr from-white via-teal-50 to-purple-50 text-center">
      <img
        src='/404.jpg'
        alt="404 Not Found"
        className="max-w-md w-full mb-8"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Oops! Page not found</h1>
      <p className="text-gray-600 text-lg md:text-xl mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-lg font-medium transition"
      >
        <FaArrowLeft className="mr-2" />
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
