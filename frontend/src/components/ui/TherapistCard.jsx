const TherapistCard = ({ name, specialization, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center space-x-5 hover:shadow-xl transition min-h-[140px]">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-4 border-teal-400"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-md text-gray-600">{specialization}</p>
      </div>
    </div>
  );
};

export default TherapistCard;
