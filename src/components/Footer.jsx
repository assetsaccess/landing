
// Import FontAwesome icons and your logo
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import logo from "../assets/logo.png"; // Import your logo

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand Information */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                        <img src={logo} alt="AssetsAccess Logo" className="h-12 mb-4" />
                        <h1 className="ml-2 text-blue-600 text-lg font-bold"><span className="text-white">
                            Assets</span>Access</h1>
                    </div>
                    <p className="text-sm mb-2">Tokenized Real Estate for emerging Markets</p>
                    <p className="text-xs">&copy; AssetsAccess 2024</p>
                </div>

                {/* Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold mb-3">LINKS</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:underline">HOME</a></li>
                        <li><a href="#features" className="hover:underline">FEATURES</a></li>
                        <li><a href="#about" className="hover:underline">ABOUT US</a></li>
                        <li><a href="#contact" className="hover:underline">CONTACT US</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-bold mb-3">CONTACT US</h3>
                    <div className="flex space-x-3 mb-4">
                        <HiX className="text-xl cursor-pointer hover:text-gray-400" />
                        <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
                        <FaInstagram className="text-xl cursor-pointer hover:text-gray-400" />
                        <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" />
                    </div>

                    {/* Contact Form */}
                    <form className="flex">
                        <input
                            type="text"
                            placeholder="Leave us a message"
                            className="px-3 py-2 rounded-l-md bg-gray-200 text-gray-900 text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
