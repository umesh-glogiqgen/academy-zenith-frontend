import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { ContactPopup } from "@/components/ContactPopup";
import { Courses } from "@/components/Courses";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProfessionalHero } from "@/components/ProfessionalHero";
import { ProgramContent } from "@/components/ProgramContent";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { StudentPlacementSection } from "@/components/StudentPlacementSection";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedCourses } from "@/components/FeaturedCourses";


const Index = () => {
  return (
    <div className="min-h-screen">
      <ContactPopup />
      <Navigation />
      <ProfessionalHero />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Courses />
    
      
      {/* CTA Section - Admissions & Fees */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-[#237d8c] to-[#349198] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Tech Career Journey?
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Easy enrollment process. Contact us via WhatsApp or fill the contact form to get started.
          </p>
          
          
          {/* Enrollment Steps */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">Step 1</div>
              <p>Contact us via WhatsApp or Contact Form</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">Step 2</div>
              <p>Get course details and batch information</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">Step 3</div>
              <p>Enroll and start your learning journey</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white text-lg px-12 py-5 shadow-xl hover:shadow-2xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/919573529800?text=Hi, I want to enroll in your course', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp: 9573529800
            </Button>
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#237d8c] text-lg px-12 py-5 transition-all duration-300"
              onClick={() => window.location.href = '#contact'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Form
            </Button>
          </div>
          
      </section>

      {/* Testimonials Section - Placeholder */}
      <section id="testimonials" className="py-20 bg-[#f0f8f5]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a4a52]">
              Success Stories
            </h2>
            <p className="text-xl text-[#5a8088] mb-8">
              Student testimonials and alumni placement details coming soon!
            </p>
            <div className="bg-white rounded-2xl p-12 shadow-lg">
              <p className="text-[#237d8c] font-semibold">
                Our students have been placed in top MNCs. Video testimonials and detailed success stories will be added soon.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Student Placement Section - prominently displayed */}
      <StudentPlacementSection />
      
      {/* Featured Courses Section */}
      <FeaturedCourses />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300"
          onClick={() => window.open('https://wa.me/919573529800', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;