import { Card } from "@/components/ui/card";
import { Award, Users, Target, Briefcase, CheckCircle, Eye, Lightbulb } from "lucide-react";

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
      description: "Flexible learning modes to suit your schedule and preferences",
      image: "/online-education-concept-studying-science-laptop-modern-technologies.jpg"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Industry Projects",
      description: "Work on real-time projects from actual business scenarios",
      image: "/team-discussing-about-industrial-project-using-dual-monitors-setup-desing-d-gears-metalic-cla.jpg"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Placement Support",
      description: "100% placement assistance with resume building and interview prep",
      image: "/male-supervisor-training-latin-executive-call-center-manager-explaining-work-stuff-employees-offering-tech-support-customer-service.jpg"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Flexible Timings",
      description: "Weekend and weekday batches available for working professionals",
      image: "/alarm-clock-with-young-businessman-using-laptop.jpg"
    }
  ];

  return (
    <section id="about" className="pb-10 bg-white">
      <div className="container mx-auto px-6 pt-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Training <span className="text-[#0066CC]">Programs</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Industry-aligned courses with real-time projects, expert trainers, and 100% placement support
          </p>
        </div>

               {/* Vision Section - Row 1 */}
               <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Content - Left */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-[#0066CC] rounded-full flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>

              <p className="text-base text-[#003A70] leading-relaxed">
                To be the global leader in professional transformation, bridging the gap
                between traditional education and modern industry needs. We envision a future where
                every learner is empowered to innovate, grow, and lead with confidence.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* Industry Focus */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200">
                      <Target className="w-6 h-6 text-[#0066CC]" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Industry Focus</span>
                  </div>
                </div>

                {/* Innovation Driven */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center border-2 border-orange-200">
                      <Lightbulb className="w-6 h-6 text-[#FF8800]" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Innovation Driven</span>
                  </div>
                </div>

                {/* Community Centered */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200">
                      <Users className="w-6 h-6 text-[#0066CC]" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Community Centered</span>
                  </div>
                </div>

                {/* Excellence Focused */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center border-2 border-orange-200">
                      <Award className="w-6 h-6 text-[#FF8800]" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Excellence Focused</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Image - Right */}
            <div className="relative">
              <Card className="overflow-hidden shadow-lg rounded-2xl border-0">
                <div className="relative">
                  <img
                    src="/man-woman-making-deal-work.jpg"
                    alt="Professional team collaboration"
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
                    <div className="bg-[#FF8800]/90 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-400">
                      <h4 className="font-bold text-white text-lg mb-1">Transforming Futures</h4>
                      <p className="text-sm text-white">
                        Empowering 10,000+ professionals worldwide to achieve career breakthroughs
                      </p>
                    </div>
                  </div> */}
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Mission Section - Row 2 */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mission Image - Left */}
            <div className="relative lg:order-1">
              <div className="relative">
                <img
                  src="/fl.png"
                  alt="Modern training facility"
                  className="w-full h-[450px] object-cover rounded-3xl shadow-xl"
                />
                {/* White Card Overlay - Top Right */}
               
              </div>
            </div>

            {/* Mission Content - Right */}
            <div className="space-y-5 lg:order-2">
              <h3 className="text-4xl font-bold text-[#003366] mb-6">Our Mission</h3>

              <p className="text-lg text-[#003366] leading-relaxed mb-8">
                To deliver exceptional, hands-on learning experiences that combine industry expertise, real-world projects, and personalized mentorship.
              </p>

              <div className="space-y-6">
                {/* Practical Learning */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
                      <path d="M24 12L28 20L36 21L30 27L32 36L24 32L16 36L18 27L12 21L20 20L24 12Z" fill="#F59E0B" />
                      <rect x="20" y="28" width="8" height="10" fill="#F59E0B" rx="1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#003366] mb-2">Practical Learning</h4>
                    <p className="text-base text-[#003366]/80">Real-world projects and hands-on experience</p>
                  </div>
                </div>

                {/* Expert Mentorship */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
                      <circle cx="24" cy="18" r="5" fill="#F59E0B" />
                      <path d="M24 24C19 24 15 27 15 30V33H33V30C33 27 29 24 24 24Z" fill="#F59E0B" />
                      <circle cx="18" cy="20" r="3" fill="#F59E0B" opacity="0.7" />
                      <circle cx="30" cy="20" r="3" fill="#F59E0B" opacity="0.7" />
                      <path d="M32 36L24 32L16 36" stroke="#F59E0B" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#003366] mb-2">Expert Mentorship</h4>
                    <p className="text-base text-[#003366]/80">Learn from industry professionals</p>
                  </div>
                </div>

                {/* Career Support */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
                      <path d="M24 15C20 15 18 17 18 20V28C18 31 20 33 24 33C28 33 30 31 30 28V20C30 17 28 15 24 15Z" fill="#F59E0B" />
                      <path d="M18 22H30" stroke="white" strokeWidth="2" />
                      <circle cx="24" cy="18" r="2" fill="white" />
                      <rect x="22" y="28" width="4" height="5" fill="#F59E0B" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#003366] mb-2">Career Support</h4>
                    <p className="text-base text-[#003366]/80">Comprehensive job assistance and guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Types */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-[#0066CC]">Services</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-gray-200 bg-white shadow-md rounded-2xl">
                <div className="relative p-4  ">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  {/* Orange circular icon overlapping bottom-left of image */}
                  <div className="absolute mt-3 left-1/2 top-44 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
              </div>
                </div>
                <div className="p-6 pt-10 text-center">
                  <h4 className="text-base font-bold mb-2 text-blue-950">{service.title}</h4>
                  <p className="text-sm text-blue-600 leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};