import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Phone, MessageCircle } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Workday HCM",
    description: "Master Human Capital Management with hands-on training in core HR, compensation, talent management, and more.",
    instructor: "Industry Expert",
    modules: 15,
    duration: "45 Days",
    students: 500,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-[#58bbb2] to-[#46a6a5]",
    icon: "👥"
  },
  {
    id: 2,
    title: "Workday Finance",
    description: "Comprehensive training in financial management, accounting, procurement, and expense management.",
    instructor: "Certified Professional",
    modules: 12,
    duration: "40 Days",
    students: 350,
    rating: 4.8,
    price: "Contact for Fees",
    badge: "High Demand",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#349198]",
    icon: "💰"
  },
  {
    id: 3,
    title: "Workday Integration",
    description: "Learn EIB, Core Connector, Studio, Report Writer, and BIRT Reports for seamless system integration.",
    instructor: "Technical Expert",
    modules: 18,
    duration: "60 Days",
    students: 280,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Technical",
    badgeColor: "bg-gradient-to-r from-[#d9eca1] to-[#58bbb2]",
    icon: "🔗"
  },
  {
    id: 4,
    title: "Workday Extend",
    description: "Build custom applications on Workday platform using Workday Extend framework and tools.",
    instructor: "Platform Specialist",
    modules: 10,
    duration: "30 Days",
    students: 200,
    rating: 4.7,
    price: "Contact for Fees",
    badge: "Advanced",
    badgeColor: "bg-gradient-to-r from-[#46a6a5] to-[#58bbb2]",
    icon: "🚀"
  },
  {
    id: 5,
    title: "ServiceNow",
    description: "Complete ServiceNow platform training including ITSM, ITOM, and custom application development.",
    instructor: "ServiceNow Expert",
    modules: 20,
    duration: "50 Days",
    students: 420,
    rating: 4.8,
    price: "Contact for Fees",
    badge: "Trending",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#46a6a5]",
    icon: "⚙️"
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    description: "Master artificial intelligence, deep learning, and machine learning with Python and real-world projects.",
    instructor: "AI Specialist",
    modules: 25,
    duration: "90 Days",
    students: 600,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Future Tech",
    badgeColor: "bg-gradient-to-r from-[#349198] to-[#46a6a5]",
    icon: "🤖"
  },
  {
    id: 7,
    title: "PeopleSoft ERP",
    description: "Comprehensive PeopleSoft training covering HCM, Finance, and technical modules.",
    instructor: "PeopleSoft Expert",
    modules: 14,
    duration: "45 Days",
    students: 180,
    rating: 4.7,
    price: "Contact for Fees",
    badge: "Enterprise",
    badgeColor: "bg-gradient-to-r from-[#58bbb2] to-[#46a6a5]",
    icon: "🏢"
  },
  {
    id: 8,
    title: "SAP Security",
    description: "Learn ethical hacking, network security, cloud security, and security compliance frameworks.",
    instructor: "Security Expert",
    modules: 22,
    duration: "60 Days",
    students: 450,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "High Demand",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#349198]",
    icon: "🔐"
  }
];

export const Courses = () => {
  const handleEnrollClick = () => {
    // WhatsApp contact
    window.open('https://wa.me/919573529800?text=Hi, I am interested in joining your course', '_blank');
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-[#C8E6D0] to-[#a8d5d8]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Training Programs
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Industry-aligned courses with real-time projects, expert trainers, and 100% placement support
          </p>
        </div>

        {/* Ongoing Batches Alert */}
        <div className="bg-white/95 rounded-xl p-4 mb-8 max-w-4xl mx-auto">
          <p className="text-center text-[#237d8c] font-semibold">
            🔥 Ongoing Training Batches: Workday HCM | Workday Finance | Workday Integration | Workday Extend
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card 
              key={course.id}
              className="overflow-hidden bg-white border-none hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Course Image/Icon Area */}
              <div className="relative h-40 bg-gradient-to-br from-[#237d8c] to-[#349198] flex items-center justify-center text-5xl text-white">
                {course.icon}
                <span className={`absolute top-3 right-3 ${course.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {course.badge}
                </span>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-[#1a4a52] group-hover:text-[#237d8c] transition-colors">
                  {course.title}
                </h3>

                <p className="text-sm text-[#5a8088] mb-3 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mb-3 text-xs text-[#5a8088]">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>{course.modules} Modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-xs text-[#5a8088]">
                    <Users className="w-3 h-3" />
                    <span>{course.students}+ students</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#46a6a5]">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs font-semibold">{course.rating}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#e8f4f1]">
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#237d8c] to-[#349198] hover:from-[#349198] hover:to-[#46a6a5] text-white text-xs"
                    onClick={handleEnrollClick}
                  >
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Enquire Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Contact for More Courses */}
        <div className="text-center mt-12">
          <p className="text-white mb-4">More courses available. Reach out for complete course catalog.</p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-[#237d8c] border-2 border-white hover:bg-transparent hover:text-white px-8"
              onClick={() => window.open('https://wa.me/919573529800', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-[#237d8c] border-2 border-white hover:bg-transparent hover:text-white px-8"
              onClick={() => window.location.href = '#contact'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};