import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import { sendTherapistOnboardingData } from "../services/axiosInstance";
import toast from "react-hot-toast";

const TherapistOnboarding = () => {
  const [formData, setFormData] = useState({
    userId:"",
    phone: "",
    gender: "",
    address: "",
    experience: "",
    bio: "",
  });

  const {user}=useAuth();
  const navigate=useNavigate();

  useEffect(()=>{
    if(user?._id){
      setFormData((prev)=>({...prev,userId:user._id}));
    }
  },[user]);

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send data to backend via fetch or axios
    postOnboardingData(formData);
    console.log("Submitting therapist profile:", formData);
  };

  const postOnboardingData=async(data)=>{
    try{
      const res=await sendTherapistOnboardingData(data);
      console.log(res.data);
      toast.success(res.data?.message);
      navigate('/login');
    }catch(error){
      console.log(error.message);
      toast.error("Something went wrong. Please try again!!!");
    }
  }

  return (
    <div className="max-h-screen bg-gradient-to-br from-teal-50 via-white to-indigo-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Therapist Onboarding
        </h2>

        <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-teal-500 outline-none"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Clinic / Work Address</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="123 Wellness St, Kolkata, India"
            />
          </div>

          {/* Experience */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Experience</label>
            <input
              type="text"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="e.g. 5 years in clinical therapy"
            />
          </div>

          {/* Bio */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium text-gray-700">Short Bio</label>
            <textarea
              name="bio"
              rows="5"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-teal-500 outline-none"
              placeholder="Tell us about your approach, expertise, and areas of focus..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Submit Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TherapistOnboarding;
