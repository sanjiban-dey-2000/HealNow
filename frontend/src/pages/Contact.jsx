import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactMessage } from "../services/axiosInstance";

const Contact = () => {
  const [contactData,setContactData]=useState({
    fullName:"",
    email:"",
    subject:"",
    message:"",
  });

  const handleFormChange=(e)=>{
    setContactData({...contactData,[e.target.name]:e.target.value});
  }

  const postContactData=async(data)=>{
    try{
      const res=await sendContactMessage(data);
      toast.success(res.data?.message);
    }catch(error){
      console.log(error.message);
      toast.error("Something went wrong. Please try again!!");
    }
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    postContactData(contactData);
    setContactData({
    fullName:"",
    email:"",
    subject:"",
    message:"",
  });
  }

  return (
    <div
      className="relative max-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Contact.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Form Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl max-w-5xl w-full p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Contact Us
          </h2>

          <form className="grid md:grid-cols-2 gap-6" onSubmit={handleFormSubmit}>
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={contactData.fullName}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 text-black border-2 border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 text-black border-2 border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactData.subject}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 text-black border-2 border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 flex flex-col">
              <label className="block text-gray-700 font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={contactData.message}
                  onChange={handleFormChange}
                rows="9"
                className="w-full px-4 py-3 text-black border-2 border-gray-500 rounded-xl shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Write your message..."
              ></textarea>

              <button
                type="submit"
                className="self-start bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
