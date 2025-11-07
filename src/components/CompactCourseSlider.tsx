import { useState, useEffect } from "react";

const courseImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80"
   ]

interface SliderProps {
  height?: string;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

export const CompactCourseSlider = ({
  height = "h-32",
  className = "",
  autoPlay = true,
  interval = 3000
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courseImages.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, interval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + courseImages.length) % courseImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % courseImages.length);
  };

  return (
    <div className={`relative w-full ${height} rounded overflow-hidden group ${className}`}>
      {/* FIXED: Sliding Container with proper width calculation */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * (100 / courseImages.length)}%)`,
          width: `${courseImages.length * 100}%` 
        }}
      >
        {courseImages.map((imageUrl, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full relative"
            style={{ width: `${100 / courseImages.length}%` }}
          >
            <img
              src={imageUrl}
              alt={`Professional training course ${index + 1}`}
              width="400"
              height="300"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
        aria-label="Previous image"
      >
        ←
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
        aria-label="Next image"
      >
        →
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-30">
        {courseImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white shadow-lg scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};