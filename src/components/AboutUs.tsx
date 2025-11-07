import { Card } from "@/components/ui/card";
import { CheckCircle, Eye } from "lucide-react";
import industryFocus from "@/assets/icons/Industry Focus.png"
import InnovationDriven from "@/assets/icons/Innovation Driven.png"
import community from "@/assets/icons/Community Centered.png"
import Excellence from "@/assets/icons/Excellence Focused.png"
import onlineOfflineTraining from "@/assets/icons/Online + Offline Training.png"
import industryProjects from "@/assets/icons/Industry Projects.png"
import placementSupport from "@/assets/icons/Placement Support.png"
import flexibleTimings from "@/assets/icons/Flexible Timings.png"
import practicalLearning from "@/assets/icons/Practical Learning.png"
import expertMentorship from "@/assets/icons/Expert Mentorship.png"
import careerSupport from "@/assets/icons/Career Support.png"
import rocket from "@/assets/rocket1.png"
import newArrow from "@assets/icons/business-strategy-success-target-goals.png"

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
      icon: onlineOfflineTraining,
      title: "Online + Offline Training",
      description: "Flexible learning modes to suit your schedule and preferences",
      image: "/online-education-concept-studying-science-laptop-modern-technologies.jpg"
    },
    {
      icon: industryProjects,
      title: "Industry Projects",
      description: "Work on real-time projects from actual business scenarios",
      image: "/team-discussing-about-industrial-project-using-dual-monitors-setup-desing-d-gears-metalic-cla.jpg"
    },
    {
      icon: placementSupport,
      title: "Placement Support",
      description: "100% placement assistance with resume building and interview prep",
      image: "/male-supervisor-training-latin-executive-call-center-manager-explaining-work-stuff-employees-offering-tech-support-customer-service.jpg"
    },
    {
      icon: flexibleTimings,
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Training <span className="text-[#0066CC]">Programs</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Industry-aligned courses with real-time projects, expert trainers, and 100% placement support
          </p>
        </div>

               {/* Vision Section - Row 1 */}
               <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Vision Content - Left */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>

              <p className="text-base text-[##33628b] leading-relaxed">
                To be the global leader in professional transformation, bridging the gap
                between traditional education and modern industry needs. We envision a future where
                every learner is empowered to innovate, grow, and lead with confidence.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* Industry Focus */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                 
                    <img src={industryFocus} width="48" height="48" loading="eager" className="h-12 w-12" />
                    
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Industry Focus</span>
                  </div>
                </div>

                {/* Innovation Driven */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                  <img src={InnovationDriven} width="48" height="48" loading="eager" className="h-12 w-12" />
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Innovation Driven</span>
                  </div>
                </div>

                {/* Community Centered */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                  <img src={community} width="48" height="48" loading="eager" className="h-12 w-12" />
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-bold text-[#003A70]">Community Centered</span>
                  </div>
                </div>

                {/* Excellence Focused */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                  <img src={Excellence} width="48" height="48" loading="eager" className="h-12 w-12" />
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
                    width="600"
                    height="400"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border-2 border-[#FF6B35]">
                      <h4 className="font-bold text-[#1E293B] text-lg mb-1">Transforming Futures</h4>
                      <p className="text-sm text-[#0066CC]">
                        Empowering 10,000+ professionals worldwide to achieve career breakthroughs.
                      </p>
                    </div>
                  </div>
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
      src="/business-strategy-success-target-goals.jpg"
      alt="Modern training facility"
      width="800"
      height="450"
      loading="eager"
      className="w-[97%] h-[300px] sm:h-[350px] md:h-[350px] lg:h-[450px] object-cover rounded-3xl"
    />

<div className="absolute top-16 right-0 left-[20px] md:-top-26 md:-right-[-200px] md:left-[320px]  lg:top-12 lg:-right-[-400px] lg:left-[80px] xl:-right-12 xl:left-[260px]  xl:top-14 flex items-center justify-between w-full sm:w-[90%] md:w-[420px] bg-white border-4 border-orange-500 rounded-2xl p-3 sm:p-4 shadow-xl animate-[fadeInUp_0.6s_ease-out]">
  {/* Rocket Icon */}
  <img
    src={rocket}
    alt="rocket"
    className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40  absolute -top-12 sm:-top-14 md:-top-16 right-2 sm:right-4 md:left-[230px] mb-1"
  />

  {/* Text Content */}
  <div className="flex flex-col justify-center text-left space-y-1 pr-20 sm:pr-24 md:pr-0">
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 leading-tight">
      <span className="font-extrabold inline-block -translate-y-2 sm:-translate-y-3 mr-1">Over </span>
      <span className="text-4xl sm:text-5xl md:text-6xl font-normal">95%</span>
    </div>

    <div className="text-gray-800 text-xs sm:text-sm md:text-base leading-snug w-full">
      <strong className="text-lg sm:text-xl md:text-2xl">of our learners</strong>
      <br />
      achieve their career goals with <strong>RR Technos.</strong>
    </div>
  </div>
</div>

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
                    
                      <img src={practicalLearning} alt="Practical Learning" width="40" height="40" loading="eager" className="w-10 h-10" />

                  </div>
                  <div>
                    <h4 className="text-xl  font-sf-display font-semibold  text-[#003366] mb-2">Practical Learning</h4>
                    <p className="text-base text-[#003366]/80 font-normal">Real-world projects and hands-on experience</p>
                  </div>
                </div>

                {/* Expert Mentorship */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    
                      <img src={expertMentorship} alt="Expert Mentorship" width="40" height="40" loading="eager" className="w-10 h-10" />

                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#003366  font-sf-display font-semibold] mb-2">Expert Mentorship</h4>
                    <p className="text-base text-[#003366]/80 font-normal">Learn from industry professionals</p>
                  </div>
                </div>

                {/* Career Support */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                   
                      <img src={careerSupport} alt="Career Support" width="40" height="40" loading="eager" className="w-10 h-10" />
                 
                  </div>
                  <div>
                    <h4 className="text-xl  text-[#003366]  font-sf-display font-semibold  mb-2">Career Support</h4>
                    <p className="text-base text-[#003366]/80  font-sf-display font-normal">Comprehensive job assistance and guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Types */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1E3A5F]">
            Our <span className="text-[#0066CC]">Services</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-gray-200 bg-white shadow-md rounded-2xl">
                <div className="relative p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    width="400"
                    height="192"
                    loading="eager"
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  {/* Orange circular icon overlapping bottom of image */}
                  <div className="absolute mt-3 left-1/2 top-44 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                  <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center text-white">
                    <img src={service.icon} alt={service.title} width="40" height="40" loading="eager" className="w-10 h-10" />
                  </div>
                </div>
              </div>
                </div>
                <div className="p-6 pt-10 text-center">
                  <h4 className="text-base font-bold mb-2 text-[#1E3A5F] font-sf-display">{service.title}</h4>
                  <p className="text-sm text-[#0066CC] leading-relaxed font-sf-display font-normal">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};