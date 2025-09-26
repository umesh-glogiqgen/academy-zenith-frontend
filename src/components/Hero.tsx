import React, { useState, useEffect, useRef } from 'react';
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
  Image: string;
}

// Define container dimensions interface
interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export const ScrollingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions | null>(null);
  const [containerSize, setContainerSize] = useState({ width: '100vw', height: '100vh' });
  const containerRef = useRef<HTMLDivElement>(null);

  // Hero slides data with your actual course images
  const heroSlides: HeroSlide[] = [
    {
      title: "Generative AI Mastery",
      Image: genAiImage,
    },
    {
      title: "Workday HCM Complete",
      Image: workdayHcmImage,
    },
    {
      title: "Workday Finance Pro",
      Image: workdayFinanceImage,
    },
    {
      title: "Workday Integration",
      Image: workdayIntegrationImage,
    },
    {
      title: "Workday Extend Platform",
      Image: workdayExtendImage,
    },
    {
      title: "PeopleSoft Mastery",
      Image: peoplesoftImage,
    },
    {
      title: "SAP Security Expert",
      Image: sapSecurityImage,
    },
    {
      title: "ServiceNow Platform",
      Image: servicenowImage,
    },
    {
      title: "Cloud Technologies",
      Image: cloudTechnologiesImage,
    }
  ];

  // Function to get image dimensions
  const getImageDimensions = (src: string): Promise<ImageDimensions> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        resolve({
          width: img.width,
          height: img.height,
          aspectRatio
        });
      };
      img.onerror = reject;
      img.src = src;
    });
  };

  // Calculate responsive container size based on image dimensions
  const calculateContainerSize = (dimensions: ImageDimensions) => {
    const maxWidth = window.innerWidth ; // Use 90% of viewport width max
    const maxHeight = window.innerHeight; // Use 80% of viewport height max

    let width = dimensions.width;
    let height = dimensions.height;

    // Scale down if image is larger than viewport
    if (width > maxWidth) {
      width = maxWidth;
      height = width / dimensions.aspectRatio;
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = height * dimensions.aspectRatio;
    }

    return {
      width: `${width}px`,
      height: `${height}px`
    };
  };

  // Load image dimensions on component mount
  useEffect(() => {
    const loadImageDimensions = async () => {
      try {
        // Use the first image to get dimensions (since all are same size)
        const dimensions = await getImageDimensions(genAiImage);
        setImageDimensions(dimensions);
        setContainerSize(calculateContainerSize(dimensions));
      } catch (error) {
        console.error('Failed to load image dimensions:', error);
        // Fallback to full viewport sizing
        setContainerSize({ width: '100vw', height: '100vh' });
      }
    };

    loadImageDimensions();
  }, []);

  // Handle window resize to maintain aspect ratio
  useEffect(() => {
    const handleResize = () => {
      if (imageDimensions) {
        setContainerSize(calculateContainerSize(imageDimensions));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imageDimensions]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <>
      {!imageDimensions ? (
        // Loading state while calculating dimensions
        <div className="w-screen h-screen flex flex-col bg-white-900">
          <div className="w-10 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white mt-4">Loading hero gallery...</p>
        </div>
      ) : (
        <div 
          // ref={containerRef}
          // className="w-screen h-screen relative overflow-hidden flex justify-center items-center bg-white"
        >
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              width: containerSize.width, 
              height: containerSize.height
            }}
          >
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className="relative bg-contain bg-center bg-no-repeat flex-shrink-0"
                style={{ 
                  backgroundImage: `url('${slide.Image}')`,
                  width: containerSize.width,
                  height: containerSize.height
                }}
              >
                {/* Hero title overlay */}
                <div className="absolute bottom-16 left-8 md:left-16 bg-black/60 text-white px-6 py-3 rounded-lg backdrop-blur-md">
                  <h1 className="text-2xl md:text-3xl font-bold">{slide.title}</h1>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slide Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 backdrop-blur-sm transition-all z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 backdrop-blur-sm transition-all z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};