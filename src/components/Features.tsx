import { Card } from "@/components/ui/card";
import { Users, Target, Smartphone, Trophy, MessageCircle, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience and passion for teaching."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Personalized Learning",
    description: "Tailored learning paths that adapt to your pace, style, and goals for maximum effectiveness."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Learn Anywhere",
    description: "Access courses on any device, anytime. Download lessons for offline learning on the go."
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Certified Programs",
    description: "Earn recognized certificates upon completion to showcase your skills to employers."
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Community Support",
    description: "Join a vibrant community of learners. Collaborate, share insights, and grow together."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Lifetime Access",
    description: "Once enrolled, enjoy lifetime access to course materials and all future updates."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a4a52]">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-[#5a8088] max-w-3xl mx-auto">
            Experience world-class education with features designed for your success
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 text-center bg-gradient-to-br from-[#f0f8f5] to-[#e8f4f1] border-none hover:from-white hover:to-[#f0f8f5] transition-all duration-300 cursor-pointer group hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#237d8c] to-[#349198] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1a4a52]">
                {feature.title}
              </h3>
              <p className="text-[#5a8088] leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};