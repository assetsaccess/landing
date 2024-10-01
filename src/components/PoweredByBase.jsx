/* eslint-disable react/no-unescaped-entities */


// Import your grouped images here
import laptopImage from "../assets/screens.png"; // Grouped image of laptop and tablet
import solanaGroupImage from "../assets/logos.png"; // Grouped logo images

const PoweredByBase = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-6 min-h-screen bg-white">
            {/* Laptop and Tablet Image */}
            <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
                <img
                    src={laptopImage}
                    alt="Laptop and Tablet"
                    className="max-w-full h-auto"
                />
            </div>

            {/* Right Side - Text and Logos */}
            <div className="md:w-1/2 w-full text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Powered by Base’s <br /> Blockchain Technology
                </h1>

                {/* Logos */}
                <div className="flex justify-center md:justify-start mt-4">
                    <img
                        src={solanaGroupImage}
                        alt="Base and Logo Group"
                        className="w-40 h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default PoweredByBase;
