import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CompactCourseSlider } from "@/components/CompactCourseSlider";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Hero Background - Now with Image Slider */}
      <div className="absolute inset-0">
        {/* REPLACED: Static background with sliding images */}
        <CompactCourseSlider 
          height="h-full" 
          className="w-full"
          autoPlay={true}
          interval={4000}
        />
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl text-center mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Future with
            <span className="block text-education-accent"> Quality Education</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Join thousands of students worldwide in our comprehensive online learning platform. 
            Master new skills, advance your career, and unlock endless opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Learning Today
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              Explore Courses
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-education-accent">50K+</div>
              <div className="text-white/80">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-education-accent">200+</div>
              <div className="text-white/80">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-education-accent">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};