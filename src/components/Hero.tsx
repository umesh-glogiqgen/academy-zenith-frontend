import React from 'react';
import { Button } from "@/components/ui/button";

// Import the main Workday training image - the colorful modules graphic
import startimage from "@/assets/startimage.png";


export const ScrollingHero = () => {
  const handleGetDemo = () => {
    window.open('https://wa.me/919573529800?text=Hi, I would like to get a demo', '_blank');
  };

  const handleEnquiry = () => {
    window.open('https://wa.me/919573529800?text=Hi, I would like to enquire about your courses', '_blank');
  };

  return (
    <section id="home" className="relative w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white pt-28 sm:pt-32 lg:pt-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 md:order-1">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight tracking-tight">
                <span className="block">MASTER EVERY</span>
                <span className="block">WORKDAY MODULE</span>
                <span className="block">WITH EXPERT-LED</span>
                <span className="block text-[#FF8800]">TRAINING</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                All-in-One Workday Training - From Basics to Advanced
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 lg:gap-4">
              <Button
                onClick={handleGetDemo}
                className="bg-[#FF8800] hover:bg-[#FF9920] text-white px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-bold rounded-md shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              >
                Get a demo
              </Button>
              <Button
                onClick={handleEnquiry}
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-bold rounded-md transition-all bg-white w-full sm:w-auto"
              >
                Enquiry
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center md:justify-end order-1 md:order-2">
            <img
              src={startimage}
              alt="Workday Training Modules"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};