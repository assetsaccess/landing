import discuss from "../assets/discuss-storyset.png";
// import boxPattern from "../assets/box-pattern.png";

const InvestmentSection = () => {
    return (
        <div className="bg-white relative flex items-center justify-center z-0">
            <div className="container mx-auto px-6 md:px-12 h-full flex items-center">
                <div className="md:flex items-center w-full h-full">
                    {/* Left Text Content */}
                    <div className="md:w-1/2 h-full flex flex-col justify-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            <span className="underline decoration-4 decoration-blue-500">
                                Real Estate
                            </span>
                            <br />
                            <span className="underline decoration-4 decoration-blue-500">
                                Investment for Everyone
                            </span>
                        </h2>
                        <p className="mt-6 text-xl md:text-2xl text-gray-600">
                            Discover how tokenization opens the door to affordable property
                            investments worldwide—no matter your budget.
                        </p>
                    </div>

                    {/* Right Image and Pattern */}
                    <div className="story relative md:w-1/2 bg-contain bg-no-repeat bg-right-bottom h-full flex justify-center md:justify-end items-center">
                        {/* Pattern Background */}

                        {/* Story Image */}
                        <div className="relative z-[5]">
                            <img
                                src={discuss}
                                alt="People discussing real estate"
                                className="w-80 h-auto md:w-96"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvestmentSection;