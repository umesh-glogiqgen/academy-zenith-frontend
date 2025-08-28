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
              <Card key={index} className="feature-bg p-8 text-center group hover:scale-105 smooth-transition">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 smooth-transition">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};