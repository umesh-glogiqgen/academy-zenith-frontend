import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Clock, Globe, HelpCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals and renowned educators with years of experience."
  },
  {
    icon: Users,
    title: "Interactive Community",
    description: "Connect with fellow learners, participate in discussions, and build your network."
  },
  {
    icon: Award,
    title: "Verified Certificates",
    description: "Earn certificates upon course completion to showcase your new skills to employers."
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Study when it's convenient for you with our flexible, self-paced learning approach."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access courses from anywhere in the world on any device with internet connection."
  },
  {
    icon: HelpCircle,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated student support team."
  }
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our <span className="text-primary">Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need to succeed in your learning journey with 
            cutting-edge features and unwavering support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group p-8 text-center cursor-pointer bg-white hover:bg-gradient-to-br hover:from-professional-primary/10 hover:to-professional-accent/10 border hover:border-professional-primary/50 shadow-md hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out overflow-hidden"
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-professional-primary/20 to-professional-accent/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon Container */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 group-hover:bg-professional-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out ring-4 ring-transparent group-hover:ring-professional-primary/20">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-500" />
                  </div>
                  
                  {/* Enhanced Title */}
                  <h3 className="text-xl font-semibold mb-4 text-professional-secondary group-hover:text-professional-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Enhanced Description */}
                  <p className="text-muted-foreground group-hover:text-professional-secondary/80 leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-professional-primary/50 group-hover:shadow-[0_0_20px_rgba(255,133,0,0.3)] transition-all duration-500"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};