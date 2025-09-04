import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { CompactCourseSlider } from "@/components/CompactCourseSlider";

export const ProfessionalHero = () => {
  return (
    <div className="bg-professional-secondary text-white py-20 mt-20">
      <div className="container mx-4xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              From Workday to AI 
              <span className="text-professional-primary block">One Platform for Your Tech Growth</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Passionate teaching, enlightening young minds and shaping the future with the most advanced Workday training. Guided by expert faculty, we provide cutting-edge learning in HCM, Finance, Integration, AI, and emerging technologies with real-time projects and complete placement support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Explore Programs
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Content - Featured Program Banner */}
          <div className="relative">
              
              
              <div className="bg-white/20 rounded-lg p-4 mb-6 backdrop-blur-sm">
                {/* PERFECT SLIDER INTEGRATION */}
                <CompactCourseSlider height="h-45" className="mb-4 group" />
                 {/* Floating Badge 1 */}
            <div className="absolute -top-5 right-5 bg-white rounded-2xl p-4 shadow-xl float-animation">
              <div className="text-2xl font-bold text-[#237d8c]">Live Classes</div>
              <div className="text-sm text-[#5a8088]">Hands-on Labs</div>
            </div>
            
            {/* Floating Badge 2 */}
            <div className="absolute -bottom-5 left-5 bg-white rounded-2xl p-4 shadow-xl float-animation" style={{ animationDelay: "1s" }}>
              <div className="text-2xl font-bold text-[#237d8c]">Career Guidance</div>
              <div className="text-sm text-[#5a8088]">1:1 Mentorship</div>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};