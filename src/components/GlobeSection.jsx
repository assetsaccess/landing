/* eslint-disable react/no-unescaped-entities */
import globe from '../assets/globe.png';
import subtract from '../assets/subtract.png';
import vectorPattern from '../assets/vector.png';
const GlobeSection = () => {
    return (
        <div className="relative w-full py-16 h-screen bg-white overflow-hidden">
            {/* Vector Patterns (background) */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src={vectorPattern}
                    alt="Pattern 1"
                    className="absolute top-8 left-0 w-full h-full "
                />
                <img
                    src={subtract}
                    alt="Pattern 2"
                    className="absolute bottom-8 right-0 w-48 h-48 "
                />
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
                {/* Globe Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={globe}
                        alt="Globe"
                        className="w-72 md:w-96"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Own Real World Assets Across the Globe
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Experience real estate investment without borders – invest, own, and manage with the security of Solana's blockchain technology.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GlobeSection;
