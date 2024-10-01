/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import vectorPattern from '../assets/vector.png';
import properties from '../assets/properties.png';




const PropertySection = () => {
  return (
    <div className="bg-gray-50 relative py-16 z-0">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={vectorPattern}
          alt="Pattern 1"
          className="absolute top-8 left-0 w-full h-full "
        /></div>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Invest in the World’s Premier Properties from Anywhere!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore a marketplace where global real estate investment is
            democratized for every investor, backed by blockchain's security
            and transparency.
          </p>
        </div>

        <div className="relative flex justify-center place-content-center items-center p-10">
          <img src={properties} alt="Properties" className="w-full h-auto" />
        </div>
      </div>
    </div>

  );
};

export default PropertySection;
