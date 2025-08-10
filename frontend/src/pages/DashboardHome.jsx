import { useEffect, useState } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa";
import toast from "react-hot-toast";
import { getPosts } from "../services/axiosInstance";
import TimeAgo from "timeago-react";

const DashboardHome = () => {
  const [commentsOpen, setCommentsOpen] = useState({});
  const [stories,setStories]=useState([]);

  const toggleComment = (id) => {
    setCommentsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getPostData=async()=>{
    try{
      const res=await getPosts();
      console.log(res.data);
      setStories(res.data?.posts);
    }catch(error){
      console.log(error.message);
      toast.error("Something went wrong.Please try again!!!");
    }
  }

  useEffect(()=>{
    getPostData();
  },[]);

  return (
    <div className="space-y-6 max-w-3xl mx-auto px-4 pb-20">
      {stories.map((post) => (
        <div
          key={post._id}
          className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden border border-gray-800"
        >
          {/* Post Header */}
          <div className="flex items-center p-4">
            <img
              src={post.userImage}
              alt="user"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
            />
            <div className="ml-3">
              <h3 className="text-base font-semibold text-white">{post.userId.fullName}</h3>
              <p className="text-xs text-gray-400"><TimeAgo datetime={post.createdAt}/></p>
            </div>
          </div>

          {/* Post Image */}
          <img
            src={`http://localhost:8001${post.media}`}
            alt="post"
            className="w-full object-cover h-64 sm:h-80 md:h-[400px]"
          />

          {/* Post Caption */}
          <div className="p-4">
            <p className="text-gray-300 text-sm">{post.content}</p>
          </div>

          {/* Like + Comment Actions Left-Aligned */}
          <div className="flex items-center gap-6 px-4 pb-3">
            <button className="flex items-center gap-2 text-pink-500 hover:text-pink-400 text-sm">
              <FaHeart /> {post.likes}
            </button>
            <button
              onClick={() => toggleComment(post.id)}
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
            >
              <FaRegComment /> Comment
            </button>
          </div>

          {/* Comment Input Box */}
          {commentsOpen[post.id] && (
            <div className="px-4 pb-4">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-4 py-2 bg-[#2a2a2a] text-sm rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-md transition">
                Post Comment
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardHome;
