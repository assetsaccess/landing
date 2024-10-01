import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import images
import patternImg from "../assets/vector.png";
import axios from "axios";

const WaitListForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.fullName || !formData.email) {
            toast.error("Please fill out all fields!");
            return;
        }

        // Handle form submission
        try {
            const res = await axios.post("https://backend.assetsaccess.xyz/api/waitlist", {
                name: formData.fullName,
                email: formData.email
            })
            console.log(res);
            toast.success("Successfully joined the waitlist!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to join the waitlist!");
        }

        // Optionally, add your API request here
        setFormData({ fullName: "", email: "" });
    };

    return (
        <section id="join-waitlist">
            <div className="relative min-h-[70vh] flex items-center justify-center">
                {/* Background pattern image */}
                <img
                    src={patternImg}
                    alt="Pattern Background"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
                />

                <div className="relative z-10 bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Join the Wait List
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Be among the first to leverage our technology to safely
                        invest in top-tier real estate opportunities worldwide.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="relative">
                        <div className="mb-4">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </form>



                </div>
            </div>
        </section>
    );
};

export default WaitListForm;
