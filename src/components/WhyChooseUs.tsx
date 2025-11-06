import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import realTimeProjects from "@/assets/icons/Real-Time Projects.png";
import placementAssistance from "@/assets/icons/100Placement Assistance.png";
import certificationGuidance from "@/assets/icons/Certification Guidance.png";
import mentorship from "@/assets/icons/mentorship.png";
import support from "@/assets/icons/24-7 Support.png";
import alumniNetwork from "@/assets/icons/Alumni Network.png";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const WhyChooseUs = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };
  const differentiators = [
    {
      icon: realTimeProjects,
      title: "Real-Time Projects",
      description: "Work on live industry projects and case studies from actual business scenarios to gain practical experience"
    },
    {
      icon: placementAssistance,
      title: "100% Placement Assistance",
      description: "Comprehensive placement support with resume building, mock interviews, and direct company connections"
    },
    {
      icon: certificationGuidance,
      title: "Certification Guidance",
      description: "Complete guidance for industry certifications with exam preparation and study materials"
    },
    {
      icon: mentorship,
      title: "1:1 Mentorship",
      description: "Personal mentoring sessions, doubt clearing, and group discussions for better understanding"
    },
    {
      icon: support,
      title: "24/7 Support",
      description: "Round-the-clock support through WhatsApp, email, and dedicated student portal"
    },
    {
      icon: alumniNetwork,
      title: "Alumni Network",
      description: "Strong alumni network working in top MNCs for referrals and career guidance"
    }
  ];

  const trainingModes = [
    {
      title: "Online Training",
      image: "/virtual-classroom-study-space.jpg",
      features: [
        "Live interactive classes",
        "Recorded session access",
        "LMS portal access",
        "24/7 support available",
        "Flexible batch timings"
      ]
    },
    {
      title: "Offline Training",
      image: "/how-is-your-deals-group-people-business-conference-modern-classroom-daytime.jpg",
      features: [
        "Classroom setup",
        "Hands-on lab sessions",
        "Group activities",
        "Face-to-face interaction",
        "Campus facilities"
      ]
    },
    {
      title: "Hybrid Learning",
      image: "/lastimg.jpg",
      features: [
        "Best of both modes",
        "Switch between online/offline",
        "Recorded backup sessions",
        "Flexible attendance",
        "Personalized approach"
      ]
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-sf-display">
            <span className="text-[#1E3A5F]">Why Choose </span><span className="text-[#0066CC]">RR Technos</span>
          </h2>
          <p className="text-base md:text-lg text-[#4A7BA7] max-w-3xl mx-auto leading-relaxed font-sf-display font-normal">
            Key differentiators that make us the preferred choice for tech training
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div key={index} className="relative ">
              {/* Circular Icon - Positioned at top center, overlapping the card */}
              <div className="absolute mt-3 left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                 
                    <img src={item.icon} alt={item.title} width="48" height="48" loading="eager" className="w-12 h-12" />
                  
                </div>
              </div>

              {/* Card Content */}
              <Card className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.08)] pt-3 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-0 text-white rounded-2xl text-center">
               <div className="rounded-b-xl bg-gradient-to-b from-[#0066CC] to-[#004C99] px-6 pt-16 pb-8 h-[98%]">
               <h3 className="text-xl font-bold mb-4 text-white font-sf-display">{item.title}</h3>
               <p className="text-white text-sm leading-relaxed font-sf-display font-normal">{item.description}</p>
               </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Training Modes */}
        <div className="bg-white rounded-3xl p-12 border border-gray-200">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 font-sf-display">
            <span className="text-[#1E3A5F]">Flexible </span><span className="text-[#0066CC]">Training Modes</span>
          </h3>

          {/* Single Card containing all three columns */}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              {trainingModes.map((mode, index) => (
                <div key={index} className="flex flex-col h-full">
                  {/* Image - Only show for modes that have image property */}
                  {mode.image && (
                    <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                      {!loadedImages[index] && (
                        <Skeleton className="absolute inset-0 w-full h-48" />
                      )}
                      <img
                        src={mode.image}
                        alt={mode.title}
                        width="400"
                        height="192"
                        loading="eager"
                        onLoad={() => handleImageLoad(index)}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                          loadedImages[index] ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                  )}

                  {/* Orange Button Title */}
                  <div className="bg-[#FF8800] text-white text-center py-3 px-4 rounded-lg font-bold text-lg mb-6">
                    {mode.title}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 flex-grow">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-5 h-5 text-[#0066CC] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#4A7BA7] leading-relaxed font-normal font-sf-display">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};