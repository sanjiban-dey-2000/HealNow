import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { sendLoginData } from "../services/axiosInstance";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate=useNavigate();

  const handleFormChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const postLoginData = async (data) => {
    try {
      const res = await sendLoginData(data);
      console.log(res.data);
      toast.success(res.data?.message);
      navigate('/dashboard');
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong. Please try again!!");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postLoginData(loginData);
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="max-h-screen bg-gradient-to-br from-[#dbeafe] via-[#f3e8ff] to-[#e0f2fe] flex items-center justify-center px-6 py-28">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        {/* Left Column: Illustration & Message */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-indigo-100 to-blue-100 p-8">
          <img
            src="/login.png" // Use any SVG or PNG
            alt="Login Illustration"
            className="w-full max-w-sm"
          />
          <h3 className="text-2xl font-semibold text-gray-700 mt-6 text-center">
            Welcome back to HealNow!
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Your wellness journey starts here.
          </p>
        </div>

        {/* Right Column: Login Form */}
        <div className="p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Log in to your account
          </h2>

          <form className="space-y-5" onSubmit={handleFormSubmit}>
            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="••••••••"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
