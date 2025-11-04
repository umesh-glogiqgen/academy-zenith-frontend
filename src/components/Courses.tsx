import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Phone, MessageCircle } from "lucide-react";
import { ContinuousNewsTicker } from "@/components/ContinuousNewsTicker";
import { useNavigate } from "react-router-dom";
const courses = [
  {
    id: 1,
    title: "Workday HCM",
    description: "Comprehensive Human Capital Management with Workday. Learn Core HCM, Talent...",
    instructor: "Industry Expert",
    modules: 18,
    duration: "60 Days",
    students: 450,
    rating: 4.8,
    price: "Contact for Fees",
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-[#58bbb2] to-[#46a6a5]",
    icon: "👥",
    image: "/traning1.jpg"
  },
  {
    id: 2,
    title: "Workday Finance",
    description: "Master Workday Financial Management with hands-on training in accounting, budgeting...",
    instructor: "Certified Professional",
    modules: 20,
    duration: "75 Days",
    students: 320,
    rating: 4.7,
    price: "Contact for Fees",
    badge: "High Demand",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#349198]",
    icon: "💰",
    image: "/traning2.jpg"
  },
  {
    id: 3,
    title: "Workday Integration",
    description: "Learn Workday Studio, Cloud Connect, and EIB for seamless data integration and syste...",
    instructor: "Technical Expert",
    modules: 16,
    duration: "50 Days",
    students: 275,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Technical",
    badgeColor: "bg-gradient-to-r from-[#d9eca1] to-[#58bbb2]",
    icon: "🔗",
    image: "/traning3.jpg"
  },
  {
    id: 4,
    title: "Workday Extend",
    description: "Build custom applications on Workday platform using Extend technology and...",
    instructor: "Platform Specialist",
    modules: 12,
    duration: "40 Days",
    students: 150,
    rating: 4.6,
    price: "Contact for Fees",
    badge: "Advanced",
    badgeColor: "bg-gradient-to-r from-[#46a6a5] to-[#58bbb2]",
    icon: "🚀",
    image: "/traning4.jpg"
  },
  {
    id: 5,
    title: "ServiceNow",
    description: "Complete ServiceNow administration, development, and ITSM implementation wi...",
    instructor: "ServiceNow Expert",
    modules: 15,
    duration: "80 Days",
    students: 380,
    rating: 4.8,
    price: "Contact for Fees",
    badge: "Enterprise",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#46a6a5]",
    icon: "⚙️",
    image: "/traning5.jpg"
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    description: "Master Python, ML algorithms, and Generative AI with hands-on projects using...",
    instructor: "AI Specialist",
    modules: 35,
    duration: "90 Days",
    students: 600,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Future Tech",
    badgeColor: "bg-gradient-to-r from-[#349198] to-[#46a6a5]",
    icon: "🤖",
    image: "/traning6.jpg"
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
    icon: "🏢",
    image: "/traning7.jpg"
  },
  {
    id: 8,
    title: "SAP Security",
    description: "Learn ethical hacking, network security, cloud security, and security compliance...",
    instructor: "Security Expert",
    modules: 22,
    duration: "60 Days",
    students: 450,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "High Demand",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#349198]",
    icon: "🔐",
    image: "/traning8.jpg"
  }
];

export const Courses = () => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    // WhatsApp contact
    window.open('https://wa.me/919573529800?text=Hi, I am interested in joining your course', '_blank');
  };

  const handleViewDetails = (courseId: number, courseTitle: string) => {
    // Map course IDs to their URL slugs
    // Courses with detail pages: 1-Workday HCM, 2-Workday Finance, 3-Workday Integration, 4-Workday Extend, 6-AI/ML
    // Coming Soon pages: 5-ServiceNow, 7-PeopleSoft ERP, 8-SAP Security
    const courseSlugMap: Record<number, string> = {
      1: 'workday-hcm',
      2: 'workday-finance',
      3: 'workday-integration',
      4: 'workday-extend',
      6: 'ai-machine-learning'
    };

    const courseSlug = courseSlugMap[courseId];
    // Find the course data to pass along
    const courseData = courses.find(c => c.id === courseId);

    if (courseSlug) {
      // Navigate to the course detail page with course data
      navigate(`/course/${courseSlug}`, { state: { courseData } });
    } else {
      // For courses without detail pages (5, 7, 8), navigate to coming soon page
      navigate('/coming-soon', { state: { courseData } });
    }
  };

  return (
    <section id="courses" className="pt-4 pb-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-sf-display">
            <span className="text-[#1E3A5F]">Our Training </span><span className="text-[#0066CC]">Programs</span>
          </h2>
          <p className="text-base md:text-lg text-[#4A7BA7] max-w-3xl mx-auto leading-relaxed font-sf-display font-normal">
            Industry-aligned courses with real-time projects, expert trainers, and 100% placement support
          </p>
        </div>

        {/* Scrolling Batches Ticker */}
        <div className="mb-10">
          <ContinuousNewsTicker />
        </div>

        {/* Courses Grid - 4 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl"
            >
              {/* Course Image with Badge */}
              <div className="relative h-44 bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {/* Badge in top-right corner */}
                <span className="absolute top-3 right-3 bg-[#17A2B8] text-white px-3 py-1 rounded-full text-xs font-semibold font-sf-display">
                  {course.badge}
                </span>
              </div>

              {/* Course Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#0066CC] mb-2 hover:text-[#0052A3] transition-colors font-sf-display">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#FF8866] mb-4 line-clamp-2 leading-relaxed font-sf-display font-normal">
                  {course.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="flex items-center gap-1.5 text-[#FF8866] font-sf-display">
                    <BookOpen className="w-3.5 h-3.5 text-[#FF8866]" />
                    <span>{course.modules} Modules</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#FF8866] font-sf-display">
                    <Clock className="w-3.5 h-3.5 text-[#FF8866]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#FF8866] font-sf-display">
                    <Users className="w-3.5 h-3.5 text-[#FF8866]" />
                    <span>{course.students}+ students</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#0066CC] font-sf-display">
                    <Star className="w-3.5 h-3.5 fill-current text-[#0066CC]" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs font-semibold py-2 font-sf-display"
                    onClick={handleEnrollClick}
                  >
                    Enquire Now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#0066CC] text-[#0066CC] hover:bg-blue-50 text-xs font-semibold py-2 font-sf-display"
                    onClick={() => handleViewDetails(course.id, course.title)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};