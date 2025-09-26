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
    <section id="why-choose-us" className="py-20 bg-[#f0f8f5]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a4a52]">
            Why Choose <span className="text-[#237d8c]">RR Technos</span>
          </h2>
          <p className="text-xl text-[#5a8088] max-w-3xl mx-auto">
            Key differentiators that make us the preferred choice for tech training
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-white hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border-none"
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-[#237d8c] to-[#349198] rounded-full flex items-center justify-center text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a4a52]">{item.title}</h3>
              <p className="text-[#5a8088]">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Training Modes */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-semibold text-center mb-8 text-[#1a4a52]">
            Flexible Training Modes
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trainingModes.map((mode, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#237d8c] to-[#349198] text-white rounded-lg p-4 mb-4">
                  <h4 className="text-xl font-semibold">{mode.title}</h4>
                </div>
                <ul className="space-y-2">
                  {mode.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#5a8088]">
                      <CheckCircle className="w-4 h-4 text-[#46a6a5] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};