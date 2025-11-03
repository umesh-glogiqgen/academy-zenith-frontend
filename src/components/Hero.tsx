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
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-sf-display leading-tight">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E3A5F] tracking-tight">MASTER EVERY</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E3A5F] tracking-tight">WORKDAY MODULE</span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1E3A5F] tracking-tight">WITH EXPERT-LED</span>
                
              </h1>
              <h1><span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-[#FF8800] tracking-tighter mt-2">TRAINING</span></h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#1E3A5F] font-normal pt-4">
                All-in-One Workday Training - From Basics to Advanced
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-4">
              <Button
                onClick={handleGetDemo}
                className="bg-[#FF8800] hover:bg-[#e67700] text-white px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3 text-sm sm:text-base lg:text-base font-bold rounded-md shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              >
                Get a demo
              </Button>
              <Button
                onClick={handleEnquiry}
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 lg:py-3 text-sm sm:text-base lg:text-base font-bold rounded-md transition-all bg-white w-full sm:w-auto"
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
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain transform scale-125 md:scale-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};