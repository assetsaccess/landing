import { useState } from "react";
import logo from '../assets/logo.png';

const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-b from-blue-200 via-blue-100 to-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img

                            src={logo}
                            alt="Assets Access Logo"
                            className="h-16 w-auto"
                        />
                        <span className="ml-2 text-blue-600 text-xl font-bold">
                            Assets<span className="text-black">Access</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 items-center">
                        <a
                            href="#home"
                            className="text-black font-medium hover:underline"
                        >
                            HOME
                        </a>
                        <a
                            href="#features"
                            className="text-black font-medium hover:underline"
                        >
                            FEATURES
                        </a>
                        <a href="#about" className="text-black font-medium hover:underline">
                            ABOUT
                        </a>
                        <a
                            href="#signin"
                            className="text-black font-medium hover:underline"
                        >
                            SIGN IN
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
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
                        href="#signin"
                        className="text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                        SIGN IN
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbars;
