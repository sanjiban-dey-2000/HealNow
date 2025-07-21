import TherapistCard from "../components/ui/TherapistCard";

const therapists = [
  {
    name: "Dr. Anjali Verma",
    specialization: "Clinical Psychologist | Stress, Anxiety",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Dr. Rahul Mehta",
    specialization: "Therapist | Depression & Relationship Counselling",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Dr. Sneha Kapoor",
    specialization: "Child Psychologist | Teen Mental Health",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  // Add more...
];

const TherapistsPage = () => {
  return (
    <div
      className="relative max-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/banner.webp')" }} // Or import and use `url(${BannerImage})`
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 pt-20 pb-30 max-w-7xl mx-auto space-y-20">
        {/* Hero Text Section */}
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            “Healing takes time, and asking for help is a courageous step.”
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Talk to our trusted professionals to find guidance, support, and peace of mind. You're never alone on this journey.
          </p>
        </div>

        {/* Therapist Cards Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Meet Our Therapists
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist, index) => (
              <TherapistCard
                key={index}
                name={therapist.name}
                specialization={therapist.specialization}
                image={therapist.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistsPage;
