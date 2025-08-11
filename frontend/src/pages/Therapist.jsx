import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getTherapists } from "../services/axiosInstance";

export default function Therapist() {
    const [therapists, setTherapists] = useState([]);

    const apiCall = async () => {
        try {
            const res = await getTherapists();
            setTherapists(res.data?.therapists || []);
            toast.success("Therapist details retrieved successfully");
        } catch (error) {
            console.log(error.message);
            toast.error("Something went wrong. Please try again!!");
        }
    };

    useEffect(() => {
        apiCall();
    }, []);

    const handleBookSession = (therapistId) => {
        alert(`Booking session with therapist ID: ${therapistId}`);
    };

    const handleLiveChat = (therapistId) => {
        alert(`Starting live chat with therapist ID: ${therapistId}`);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-10 md:ml-15">Therapist Outlet</h1>

            {therapists.length === 0 ? (
                <p className="text-gray-500">No therapists available.</p>
            ) : (
                <div className="flex flex-col gap-6">
                    {therapists.map((therapist) => (
                        <div
                            key={therapist._id}
                            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row lg:flex-row-reverse max-w-3xl mx-auto w-full"
                        >
                            {/* Therapist Image */}
                            <div className="w-full lg:w-1/3 h-48 lg:h-auto">
                                <img
                                    src={therapist.image || "/default-therapist.jpg"}
                                    alt={therapist.userId?.fullName}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Therapist Details */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold text-black">
                                        {therapist.userId?.fullName}
                                    </h2>
                                    <p className="text-gray-600 mt-1">{therapist.bio}</p>
                                    <p className="text-gray-500 mt-1">
                                        <strong>Address:</strong> {therapist.address || "N/A"}
                                    </p>
                                    <p className="text-gray-500">
                                        <strong>Experience:</strong> {therapist.experience || 0} years
                                    </p>
                                    <p className="text-gray-500">
                                        <strong>Gender:</strong> {therapist.gender || "N/A"}
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => handleBookSession(therapist._id)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Book Session
                                    </button>
                                    <button
                                        onClick={() => handleLiveChat(therapist._id)}
                                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    >
                                        Live Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
