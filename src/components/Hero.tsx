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
    <section id="home" className="relative w-full bg-gradient-to-br from-blue-100 via-blue-50 to-white pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-3 md:gap-2 lg:gap-1 xl:gap-2 items-center min-h-[450px] sm:min-h-[500px] md:min-h-[400px]">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5 order-2 md:order-1">
            <div className="space-y-0">
              <h1 className="font-sf-display leading-[1.05]">
                <span className="block text-[1.3rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.6rem] xl:text-[3rem] font-black text-[#1E3A5F] tracking-tighter">MASTER EVERY</span>
                <span className="block text-[1.3rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.6rem] xl:text-[3rem] font-black text-[#1E3A5F] tracking-tighter">WORKDAY MODULE</span>
                <span className="block text-[1.3rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.6rem] xl:text-[3rem] font-black text-[#1E3A5F] tracking-tighter">WITH EXPERT-LED</span>
                <span className="block text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[3.8rem] xl:text-[4.5rem] font-black text-[#FF8800] tracking-wider leading-[1.05]">TRAINING</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-sm text-[#1E3A5F] font-medium pt-2 sm:pt-3">
                All-in-One Workday Training - From Basics to Advanced
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-4">
              <Button
                onClick={handleGetDemo}
                className="bg-[#FF8800] hover:bg-[#e67700] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-sm font-bold rounded-md shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              >
                Get a demo
              </Button>
              <Button
                onClick={handleEnquiry}
                variant="outline"
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-sm font-bold rounded-md transition-all bg-white w-full sm:w-auto"
              >
                Enquiry
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center md:justify-center order-1 md:order-2">
            <img
              src={startimage}
              alt="Workday Training Modules"
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};