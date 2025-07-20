import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/Hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 h-full flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Column */}
          <div className="text-white space-y-5">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Prioritize Your Mental Wellness.
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Talk to licensed professionals with complete privacy and flexible scheduling.
            </p>
            <Link
              to="/get-started"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl text-lg font-medium transition"
            >
              Get Started
            </Link>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center">
            <img
              src='/mental-health.png'
              alt="Mental wellness illustration"
              className="max-h-[300px] md:max-h-[400px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
