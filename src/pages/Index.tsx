import { ScrollingHero } from "@/components/Hero";
import { ThreeCards } from "@/components/ThreeCards";
import { AboutUs } from "@/components/AboutUs";
import { ContactPopup } from "@/components/ContactPopup";
import { Courses } from "@/components/Courses";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProgramContent } from "@/components/ProgramContent";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { StudentPlacementSection } from "@/components/StudentPlacementSection";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedCourses } from "@/components/FeaturedCourses";

import PlacementPartners from "@/components/PlacementPartners";
import { ContactForm } from "@/components/ContactForm";
import { PlacementStatsCards } from "@/components/PlacementStatsCards";
import { OurVision } from "@/components/OurVision";
import { RecommendedCourses } from "@/components/RecommendedCourses";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";  


const Index = () => {
  const location = useLocation();
  const [forceRenderSections, setForceRenderSections] = useState<string[]>([]);
  const [highlightWorkdayCards, setHighlightWorkdayCards] = useState(false);

  // Ensure page starts at top on fresh load (no hash, no state)
  useEffect(() => {
    if (!location.hash && !location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, []); // Run only once on mount

  // Handle scroll to section when navigating from course detail page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const shouldHighlightWorkday = location.state?.highlightWorkday;

      // Force render the target section first
      setForceRenderSections([sectionId]);

      // Set highlight state if needed
      if (shouldHighlightWorkday) {
        setHighlightWorkdayCards(true);

        // Remove highlight after 15 seconds
        const highlightTimer = setTimeout(() => {
          setHighlightWorkdayCards(false);
        }, 15000);

        return () => clearTimeout(highlightTimer);
      }

      // Wait for the section to render, then scroll
      const scrollTimer = setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarHeight = 118; // Top bar (38px) + Main nav (80px)
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);

      // Clear the state to prevent scroll on subsequent renders
      window.history.replaceState({}, document.title);

      return () => clearTimeout(scrollTimer);
    }
  }, [location]);

  // Handle hash navigation (e.g., clicking Contact from nav)
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');

      // Force render all sections if navigating to contact
      if (targetId === 'contact') {
        setForceRenderSections(['placement', 'partners', 'contact']);
      }

      // Wait for sections to render, then scroll
      const scrollTimer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 118; // Top bar (38px) + Main nav (80px)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);

      return () => clearTimeout(scrollTimer);
    }
  }, [location.hash]);

  return (
    <>
      <ScrollingHero />
      <ThreeCards />
      <AboutUs />
      <WhyChooseUs />
      <Courses highlightWorkdayCards={highlightWorkdayCards} />
      <FeaturedCourses />
      <StudentPlacementSection />
      <PlacementPartners/>
      {/* <RecommendedCourses limit={4} title="Explore More Courses" /> */}
      <ContactForm />

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300"
          onClick={() => window.open('https://wa.me/919573529800?text=Hi', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
};

export default Index;