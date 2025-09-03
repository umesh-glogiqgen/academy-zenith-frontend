import { Button } from "@/components/ui/button";
import { CourseImagesCarousel } from "@/components/CourseImagesCarousel"; // NEW IMPORT
import { Phone, Mail } from "lucide-react";

export const ProfessionalHero = () => {
  return (
    <div className="bg-professional-secondary text-white py-20 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              From Workday to AI 
              <span className="text-professional-primary block">One Platform for Your Tech Growth</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Master enterprise technologies with our expert-led training programs. 
              Workday, AI, ERP systems, and cutting-edge tech skills with real-time projects and 100% placement support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Explore Programs
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
                Book Free Demo
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-professional-primary" />
                <span>Call us: +91 9573529800</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-professional-primary" />
                <span>rrtechnos@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Program Banner */}
          <div className="relative">
            <div className="bg-gradient-to-r from-professional-primary to-professional-accent rounded-lg p-8 text-center shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Featured Program</h3>
                <h2 className="text-3xl font-black">
                  Workday HCM<br/>
                  Professional Training
                </h2>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 mb-6 backdrop-blur-sm">
                   {/* REPLACED: Static image with auto-scrolling carousel */}
                   <div className="w-full h-32 mb-4 rounded overflow-hidden">
                  <CourseImagesCarousel />
                </div>
                <div className="text-sm">
                  <p>Comprehensive Program</p>
                  <p>Live Projects • Expert Mentors • Job Assistance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <Phone className="w-4 h-4 mx-auto mb-1" />
                  <p>+91 9573529800</p>
                </div>
                <div>
                  <Mail className="w-4 h-4 mx-auto mb-1" />
                  <p>rrtechnos@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};