import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">

        {/* Left: Illustration */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-teal-100 to-teal-200 p-8">
          <img
            src='/signup.png'
            alt="Signup Illustration"
            className="w-full max-w-sm"
          />
          <h3 className="text-xl font-semibold text-gray-700 mt-6 text-center">
            Join the HealNow community and take a step toward better mental health.
          </h3>
        </div>

        {/* Right: Signup Form */}
        <div className="p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Role</label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select role</option>
                <option value="patient">User</option>
                <option value="therapist">Therapist</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Confirm Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-teal-600 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
