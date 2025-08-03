import { useState } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa";

const dummyPosts = [
  {
    id: 1,
    username: "ananya_s",
    userImage: "/avatar.png",
    image: "/post1.jpg",
    caption: "Taking one day at a time 🧘‍♀️ #MentalHealthMatters",
    likes: 34,
  },
  {
    id: 2,
    username: "rohitk",
    userImage: "/avatar.png",
    image: "/post2.jpg",
    caption: "Nature therapy always helps 🌿",
    likes: 72,
  },
];

const DashboardHome = () => {
  const [commentsOpen, setCommentsOpen] = useState({});

  const toggleComment = (id) => {
    setCommentsOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto px-4 pb-20">
      {dummyPosts.map((post) => (
        <div
          key={post.id}
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
              <h3 className="text-base font-semibold text-white">{post.username}</h3>
              <p className="text-xs text-gray-400">Just now</p>
            </div>
          </div>

          {/* Post Image */}
          <img
            src={post.image}
            alt="post"
            className="w-full object-cover h-64 sm:h-80 md:h-[400px]"
          />

          {/* Post Caption */}
          <div className="p-4">
            <p className="text-gray-300 text-sm">{post.caption}</p>
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
