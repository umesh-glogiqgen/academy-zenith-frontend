import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, ChevronRight, Play, Star, CheckCircle, 
  Zap, Calendar
} from "lucide-react";

// Import your course images
import genAiImage from "@/assets/1.png";
import workdayHcmImage from "@/assets/2.png";
import workdayFinanceImage from "@/assets/3.png";
import workdayIntegrationImage from "@/assets/4.png";
import workdayExtendImage from "@/assets/5.png";
import peoplesoftImage from "@/assets/6.png";
import sapSecurityImage from "@/assets/7.png";
import servicenowImage from "@/assets/8.png";
import cloudTechnologiesImage from "@/assets/9.png";



// Define the slide interface for type safety
interface HeroSlide {
  title: string;
  backgroundImage: string;
}

export const ScrollingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data with your actual course images
  const heroSlides: HeroSlide[] = [
    {
      title: "Generative AI Mastery",
      backgroundImage: genAiImage,
    },

    {
      title: "Workday HCM Complete",
      backgroundImage: workdayHcmImage,
    },

    {
      title: "Workday Finance Pro",
      backgroundImage: workdayFinanceImage,
    },
    {
      title: "Workday Integration",
      backgroundImage: workdayIntegrationImage,
    },
    {
      title: "Workday Extend Platform",
      backgroundImage: workdayExtendImage,
    },
    {
      title: "PeopleSoft Mastery",
      backgroundImage: peoplesoftImage,
    },
    {
      title: "SAP Security Expert",
      backgroundImage: sapSecurityImage,
    },
    {
      title: "ServiceNow Platform",
      backgroundImage: servicenowImage,
    },
    {
      title: "Cloud Technologies",
      backgroundImage: cloudTechnologiesImage,
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Increased to 6 seconds to accommodate more slides
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('${slide.backgroundImage}')` 
            }}
          >

          </div>
        ))}
      </div>
      
      {/* Slide Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Course Progress Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
          <span className="font-medium">{currentSlide + 1}</span>
          <span className="text-white/70"> / {heroSlides.length}</span>
          <span className="ml-2 text-orange-300 font-medium">
            {heroSlides[currentSlide].title.split(' ')[0]}
          </span>
        </div>
      </div>
    </div>
  );
};