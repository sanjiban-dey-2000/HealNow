import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { sendUserOnboardingData } from "../services/axiosInstance";

const UserOnboarding = () => {
  const [formData, setFormData] = useState({
    userId: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    occupation: "",
    bio: "",
  });

  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?._id) {
      setFormData((prev) => ({ ...prev, userId: user._id }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await sendUserOnboardingData(formData);
      toast.success(res.data?.message || "Profile submitted!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Complete Your Profile
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="City, State"
            />
          </div>

          {/* Occupation */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="e.g., Student, Software Engineer, Freelancer"
            />
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Short Bio</label>
            <textarea
              name="bio"
              rows="4"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Tell us a bit about yourself..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserOnboarding;
