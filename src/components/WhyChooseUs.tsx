import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Award, Briefcase, MessageSquare, TrendingUp } from "lucide-react";

export const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Real-Time Projects",
      description: "Work on live industry projects and case studies from actual business scenarios to gain practical experience"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "100% Placement Assistance",
      description: "Comprehensive placement support with resume building, mock interviews, and direct company connections"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Guidance",
      description: "Complete guidance for industry certifications with exam preparation and study materials"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "1:1 Mentorship",
      description: "Personal mentoring sessions, doubt clearing, and group discussions for better understanding"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support through WhatsApp, email, and dedicated student portal"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Alumni Network",
      description: "Strong alumni network working in top MNCs for referrals and career guidance"
    }
  ];

  const trainingModes = [
    {
      title: "Online Training",
      image: "/src/assets/virtual-classroom-study-space.jpg",
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
      image: "/src/assets/how-is-your-deals-group-people-business-conference-modern-classroom-daytime.jpg",
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
      image: "/src/assets/lastimg.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Why Choose <span className="text-[#0066CC]">RR Technos</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
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
                  <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <Card className="bg-white  shadow-[0_0_10px_rgba(0,0,0,0.08)]    pt-3 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border-0 text-white rounded-2xl text-center">
               <div className="rounded-b-xl bg-[#0066CC] px-6 pt-16 pb-8  h-[98%]">
               <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
               <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
               </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Training Modes */}
        <div className="bg-white rounded-3xl p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-950">
            Flexible  <span className="text-[#0066CC]">Training Modes</span>
          </h3>

          {/* Single Card containing all three columns */}
          <div className=" overflow-hidden ">
            <div className="grid md:grid-cols-3 ">
              {trainingModes.map((mode, index) => (
                <div key={index} className="p-6">
                  {/* Image - Only show for modes that have image property */}
                  {mode.image && (
                    <div className="relative h-40 overflow-hidden rounded-lg mb-4">
                      <img
                        src={mode.image}
                        alt={mode.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Orange Button Title */}
                  <div className="bg-[#FF8800] text-white text-center py-3 px-4 rounded-lg font-bold text-base mb-4">
                    {mode.title}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {mode.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0066CC] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-blue-700 leading-relaxed">{feature}</span>
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