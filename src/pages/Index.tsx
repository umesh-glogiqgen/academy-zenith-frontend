import { Navigation } from "@/components/Navigation";
import { ScrollingHero } from "@/components/Hero";
import { ThreeCards } from "@/components/ThreeCards";
import { AboutUs } from "@/components/AboutUs";
import { ContactPopup } from "@/components/ContactPopup";
import { Courses } from "@/components/Courses";
import { WhyChooseUs } from "@/components/WhyChooseUs";
// import { ProfessionalHero } from "@/components/ProfessionalHero";
import { ProgramContent } from "@/components/ProgramContent";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { StudentPlacementSection } from "@/components/StudentPlacementSection";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedCourses } from "@/components/FeaturedCourses";
import { PlacementPartners } from "@/components/PlacementPartners";
import { ContactForm } from "@/components/ContactForm";
import { PlacementStatsCards } from "@/components/PlacementStatsCards";
import { LazySection } from "@/components/LazySection";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Index = () => {
  const location = useLocation();
  const [forceRenderSections, setForceRenderSections] = useState<string[]>([]);

  // Handle scroll to section when navigating from course detail page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      // Force render the target section first
      setForceRenderSections([sectionId]);

      // Wait for the section to render, then scroll
      const scrollTimer = setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      // Clear the state to prevent scroll on subsequent renders
      window.history.replaceState({}, document.title);

      return () => clearTimeout(scrollTimer);
    }
  }, [location]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      {/* <ProfessionalHero /> */}
      <ScrollingHero />
      <ThreeCards />

      {/* Render AboutUs and Courses immediately for navigation */}
      <AboutUs />

      <LazySection forceRender={forceRenderSections.includes('why-choose')}>
        <WhyChooseUs />
      </LazySection>

      <Courses />

      <LazySection forceRender={forceRenderSections.includes('featured')}>
        <FeaturedCourses />
      </LazySection>

      {/* Student Placement Section */}
      <LazySection forceRender={forceRenderSections.includes('placement')}>
        <StudentPlacementSection />
      </LazySection>

      {/* Placement Partners Section - Lazy load with more margin for heavy images */}
      <LazySection forceRender={forceRenderSections.includes('partners')} threshold={0}>
        <PlacementPartners />
      </LazySection>

      <LazySection forceRender={forceRenderSections.includes('contact')}>
        <ContactForm/>
      </LazySection>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300"
          onClick={() => window.open('https://wa.me/919573529800?text=Hi', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;