import { FaHeart, FaUserShield, FaComments } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div
      className="relative max-h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/about.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="text-lg text-white/90">
            At HealNow, we believe mental health is just as important as physical health. Our mission is to make therapy accessible, affordable, and stigma-free for everyone — anytime, anywhere.
          </p>
        </div>

        {/* How We Help Cards */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-gray-800">
              <FaHeart className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Empathy First</h3>
              <p>
                Our therapists listen without judgment and support your healing journey.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-gray-800">
              <FaUserShield className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy Guaranteed</h3>
              <p>
                Your sessions are 100% confidential and encrypted. Your trust is our priority.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-gray-800">
              <FaComments className="text-teal-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real Conversations</h3>
              <p>
                Connect in real-time with licensed professionals — chat, call, or video.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose HealNow */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose HealNow?</h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left text-white/90 text-lg">
            <li>✔️ Certified & experienced therapists</li>
            <li>✔️ Flexible session timings & affordable pricing</li>
            <li>✔️ AI-driven emotional insights (coming soon)</li>
            <li>✔️ Safe, inclusive, and stigma-free platform</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
