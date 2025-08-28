import { Navigation } from "@/components/Navigation";
import { ProfessionalHero } from "@/components/ProfessionalHero";
import { ProgramContent } from "@/components/ProgramContent";
import { ServicesSidebar } from "@/components/ServicesSidebar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProfessionalHero />
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ProgramContent />
          </div>
          <div className="lg:col-span-1">
            <ServicesSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
