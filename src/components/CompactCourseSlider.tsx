import { useState, useEffect } from "react";

const courseImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", 
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&q=80"
];

export const CompactCourseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % courseImages.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 rounded overflow-hidden bg-gray-200">
      {/* Sliding Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${courseImages.length * 100}%` 
        }}
      >
        {courseImages.map((imageUrl, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: `${100 / courseImages.length}%` }}
          >
            <img
              src={imageUrl}
              alt={`Course ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {courseImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white shadow-lg' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};