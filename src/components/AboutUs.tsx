import { Card } from "@/components/ui/card";
import { Award, Users, Target, Briefcase, CheckCircle } from "lucide-react";

export const AboutUs = () => {
  const credentials = [
    "5+ Top Workday Experienced Professionals",
    "Work Experience in Top MNCs Globally",
    "Product Based Companies Expertise",
    "Industry-Aligned Curriculum",
    "Real-World Project Experience"
  ];

  const serviceTypes = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Online + Offline Training",
      description: "Flexible learning modes to suit your schedule and preferences"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Industry Projects",
      description: "Work on real-time projects from actual business scenarios"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Placement Support",
      description: "100% placement assistance with resume building and interview prep"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Flexible Timings",
      description: "Weekend and weekday batches available for working professionals"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a4a52]">
            About <span className="text-[#237d8c]">RR Technos</span>
          </h2>
          <p className="text-xl text-[#5a8088] max-w-3xl mx-auto">
            Your trusted partner for professional tech training and career transformation
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-[#f0f8f5] to-[#e8f4f1] border-none">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#237d8c] rounded-full flex items-center justify-center text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a4a52]">Our Vision</h3>
            </div>
            <p className="text-[#5a8088] leading-relaxed">
              To be the leading technology training institute that bridges the gap between 
              academic learning and industry requirements, empowering professionals with 
              cutting-edge skills in Workday, AI, and emerging technologies.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[#f0f8f5] to-[#e8f4f1] border-none">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#237d8c] rounded-full flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1a4a52]">Our Mission</h3>
            </div>
            <p className="text-[#5a8088] leading-relaxed">
              To provide industry-relevant, practical training through experienced professionals, 
              ensuring every student gains hands-on expertise and achieves career success with 
              our comprehensive placement support.
            </p>
          </Card>
        </div>

        {/* Credentials */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8 text-[#1a4a52]">
            Our Expert Team
          </h3>
          <div className="bg-gradient-to-r from-[#237d8c] to-[#349198] rounded-2xl p-8 text-white">
            <p className="text-xl font-semibold mb-6 text-center">
              We have 5 topmost Workday experienced professionals who have work experience 
              in all kinds of top MNCs and other product-based companies across the globe
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Types */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8 text-[#1a4a52]">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#237d8c] to-[#349198] rounded-full flex items-center justify-center text-white">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-[#1a4a52]">{service.title}</h4>
                <p className="text-sm text-[#5a8088]">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};