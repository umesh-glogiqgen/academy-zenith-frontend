import { Card } from "@/components/ui/card";
import { Award, Users, Target, Briefcase, CheckCircle ,Eye, Heart,Lightbulb } from "lucide-react";

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

               {/* Vision Section - Row 1 */}
               <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Content - Left */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading catalyst for professional transformation, bridging the gap 
                between traditional education and industry demands. We envision a world where 
                every professional has access to cutting-edge skills and knowledge that propel 
                their careers to new heights.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Industry Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Innovation Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Community Centered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Excellence Focused</span>
                </div>
              </div>
            </div>

            {/* Vision Image - Right */}
            <div className="relative">
              <Card className="card-elegant overflow-hidden">
                <div className="aspect-[4/2] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" 
                    alt="Professional team collaboration representing our vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">Transforming Futures</h4>
                      <p className="text-sm text-muted-foreground">
                        Empowering 10,000+ professionals worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Mission Section - Row 2 */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mission Image - Left */}
            <div className="relative lg:order-1">
              <Card className="card-elegant overflow-hidden">
                <div className="aspect-[4/2] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80" 
                    alt="Modern training facility showcasing our mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>
                  <div className="absolute top-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">Success Rate</h4>
                          <p className="text-xl font-bold text-primary">95%</p>
                        </div>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Mission Content - Right */}
            <div className="space-y-4 lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                To deliver exceptional, practical training programs that combine industry 
                expertise with personalized learning experiences.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Practical Learning</h4>
                    <p className="text-xs text-muted-foreground">
                      Real-world projects and hands-on experience
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                  <div className="w-6 h-6 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-3 h-3 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Expert Mentorship</h4>
                    <p className="text-xs text-muted-foreground">
                      Learn from industry professionals
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                  <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">Career Support</h4>
                    <p className="text-xs text-muted-foreground">
                      Comprehensive job assistance and guidance
                    </p>
                  </div>
                </div>
              </div>
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