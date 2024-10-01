import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-b from-[rgba(40,72,136,0.64)]  via-blue-100 to-white w-full py-4 backdrop-blur-2xl shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Assets Access Logo"
                        className="h-16"
                    />
                    <h1 className="ml-2 text-blue-700 text-lg font-bold">AssetsAccess</h1>
                </div>

                {/* Links (hidden on mobile) */}
                <div className="hidden md:flex space-x-8">
                    <Link
                        to="home"
                        className="text-black hover:text-blue-600 cursor-pointer"
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        to="features"
                        className="text-black hover:text-blue-600 cursor-pointer"
                        smooth={true}
                        duration={500}
                    >
                        Features
                    </Link>
                    <Link
                        to="about"
                        className="text-black hover:text-blue-600 cursor-pointer"
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                    <a
                        href="#join-waitlist"
                        className="text-black hover:text-blue-600 cursor-pointer"

                    >
                        Join Waitlist
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleSidebar}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {/* {isOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center z-[50]">
                    <FaTimes
                        className="absolute top-4 right-4 text-3xl text-red-600 cursor-pointer"
                        onClick={toggleSidebar}
                    />
                    <Link
                        to="home"
                        className="py-6 text-xl text-black hover:text-blue-600"
                        onClick={toggleSidebar}
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        to="features"
                        className="py-6 text-xl text-black hover:text-blue-600"
                        onClick={toggleSidebar}
                        smooth={true}
                        duration={500}
                    >
                        Features
                    </Link>
                    <Link
                        to="about"
                        className="py-6 text-xl text-black hover:text-blue-600"
                        onClick={toggleSidebar}
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                    <Link
                        to="signin"
                        className="py-6 text-xl text-black hover:text-blue-600"
                        onClick={toggleSidebar}
                        smooth={true}
                        duration={500}
                    >
                        Sign In
                    </Link>
                </div>
            )} */}

            <div
                className={`md:hidden ${isOpen ? "block" : "hidden"}`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#home"
                        className="text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                        HOME
                    </a>
                    <a
                        href="#features"
                        className="text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                        FEATURES
                    </a>
                    <a
                        href="#about"
                        className="text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                        ABOUT
                    </a>
                    <a
                        href="#join-waitlist"
                        className="text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                        JOIN WAITLIST
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
