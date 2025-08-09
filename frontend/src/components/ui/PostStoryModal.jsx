import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { createPost } from "../../services/axiosInstance";
import toast from "react-hot-toast";

const PostStoryModal = ({ isOpen, onClose, onPostCreated }) => {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const postStories=async(formData)=>{
    try{
        const res=await createPost(formData);
        console.log(res.data);
        toast.success(res.data?.message);
    }catch(error){
        console.log(error.message);
        toast.error("Something went wrong..Please try again!!");
    }
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    if (!content && !media) {
      alert("Please add text or media to post.");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    if (media) formData.append("file", media);

    postStories(formData);

  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex justify-center items-center z-50 px-4">
      <div className="bg-[#1f1f1f] text-white rounded-2xl w-full max-w-3xl p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-6">Create Post</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text Input */}
          <textarea
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            placeholder="What's on your mind?"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          {/* Media Upload */}
          <div>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
              className="block w-full text-gray-300 cursor-pointer"
            />
          </div>

          {/* Preview Section */}
          {preview && (
            <div className="mt-4 rounded-lg overflow-hidden border border-gray-700">
              {media?.type.startsWith("image") ? (
                <img src={preview} alt="Preview" className="w-full h-auto object-cover" />
              ) : (
                <video
                  src={preview}
                  controls
                  className="w-full h-auto"
                />
              )}
            </div>
          )}

          {/* Post Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-lg transition"
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostStoryModal;
