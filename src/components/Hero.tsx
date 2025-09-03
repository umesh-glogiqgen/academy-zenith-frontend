import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, BookOpen, Monitor, Building, Briefcase } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden mt-16 bg-gradient-to-br from-[#d9eca1] via-[#C8E6D0] to-[#a8d5d8]">
      {/* Floating background element */}
      <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#46a6a5]/10 to-transparent animate-pulse" />
      
      
      
      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#1a4a52]">
              Master <span className="text-[#237d8c]">Workday, AI & Tech</span>{" "}
              with Industry Experts
            </h1>
            
            <p className="text-xl text-[#5a8088] mb-8 leading-relaxed">
            Passionate teaching, enlightening young minds and shaping the future with the most advanced Workday training. Guided by expert faculty, we provide cutting-edge learning in HCM, Finance, Integration, AI, and emerging technologies with real-time projects and complete placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#237d8c] to-[#349198] hover:from-[#349198] hover:to-[#46a6a5] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Book Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c] hover:text-white text-lg px-8 py-6 transition-all duration-300"
                onClick={() => {
                  const coursesSection = document.getElementById('courses');
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                View All Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-[#46a6a5]" />
                </div>
                <div className="text-3xl font-bold text-[#237d8c]">5+</div>
                <div className="text-sm text-[#5a8088]">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-8 h-8 text-[#46a6a5]" />
                </div>
                <div className="text-3xl font-bold text-[#237d8c]">20+</div>
                <div className="text-sm text-[#5a8088]">Tech Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-8 h-8 text-[#46a6a5]" />
                </div>
                <div className="text-3xl font-bold text-[#237d8c]">100%</div>
                <div className="text-sm text-[#5a8088]">Placement Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with floating badges */}
          <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" 
              alt="Students learning together"
              className="w-full rounded-2xl shadow-2xl"
            />
            
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
    </section>
  );
};