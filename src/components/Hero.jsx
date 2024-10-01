/* eslint-disable react/no-unescaped-entities */
import hero from '../assets/hero-image.png';

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh]  bg-white">
            {/* Background image at the bottom */}
            <div className=" hero-bg absolute inset-x-0 bottom-0 h-full bg-cover bg-center bg-no-repeat opacity-75 z-0"
            >
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-12">
                {/* Left Text Section */}
                <div className="md:w-1/2 z-20">
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
                        Step Into the <br /> Future of Real Estate Investment
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Explore a new era of property investment: Decentralized, secure, and accessible. Redefining real estate for the digital age with seamless, transparent, and efficient solutions.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg transition duration-300 ease-in-out">
                        Get Started Now
                    </button>
                </div>

                {/* Right Animated Image Section */}
                <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
                    <img
                        src={hero}
                        alt="Animated Real Estate Graphic"
                        className="w-72 md:w-96 animate-float" // Optional animation
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
