import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const allCourses = [
  {
    id: 1,
    title: "Workday HCM",
    description: "Comprehensive Human Capital Management with Workday. Learn Core HCM, Talent...",
    instructor: "Industry Expert",
    modules: 18,
    duration: "45 Days",
    students: 5000,
    rating: 4.8,
    price: "Contact for Fees",
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-[#58bbb2] to-[#46a6a5]",
    icon: "👥",
    image: "/traning1.jpg",
    slug: "workday-hcm"
  },
  {
    id: 2,
    title: "Workday Finance",
    description: "Master Workday Financial Management with hands-on training in accounting, budgeting...",
    instructor: "Certified Professional",
    modules: 20,
    duration: "45 Days",
    students: 5000,
    rating: 4.7,
    price: "Contact for Fees",
    badge: "High Demand",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#349198]",
    icon: "💰",
    image: "/traning2.jpg",
    slug: "workday-finance"
  },
  {
    id: 3,
    title: "Workday Integration",
    description: "Learn Workday Studio, Cloud Connect, and EIB for seamless data integration and syste...",
    instructor: "Technical Expert",
    modules: 16,
    duration: "45 Days",
    students: 2000,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Technical",
    badgeColor: "bg-gradient-to-r from-[#d9eca1] to-[#58bbb2]",
    icon: "🔗",
    image: "/traning3.jpg",
    slug: "workday-integration"
  },
  {
    id: 4,
    title: "Workday Extend",
    description: "Build custom applications on Workday platform using Extend technology and...",
    instructor: "Platform Specialist",
    modules: 12,
    duration: "45 Days",
    students: 150,
    rating: 4.6,
    price: "Contact for Fees",
    badge: "Advanced",
    badgeColor: "bg-gradient-to-r from-[#46a6a5] to-[#58bbb2]",
    icon: "🚀",
    image: "/traning4.jpg",
    slug: "workday-extend"
  },
  {
    id: 5,
    title: "ServiceNow",
    description: "Complete ServiceNow administration, development, and ITSM implementation wi...",
    instructor: "ServiceNow Expert",
    modules: 15,
    duration: "45 Days",
    students: 380,
    rating: 4.8,
    price: "Contact for Fees",
    badge: "Enterprise",
    badgeColor: "bg-gradient-to-r from-[#237d8c] to-[#46a6a5]",
    icon: "⚙️",
    image: "/standard-quality-control-concept-m.jpg",
    slug: "servicenow"
  },
  {
    id: 6,
    title: "Generative AI",
    description: "Master Prompt Engineering, LLMs, RAG, and AI Agents with hands-on projects. Build intelligent AI solutions...",
    instructor: "Certified AI Engineer",
    modules: 8,
    duration: "2 Months",
    students: 600,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Future Tech",
    badgeColor: "bg-gradient-to-r from-[#349198] to-[#46a6a5]",
    icon: "🤖",
    image: "/traning6.jpg",
    slug: "ai-machine-learning"
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
    image: "/enterprise-resource-management-erp-software-system-business-resources-uds.jpg",
    slug: "peoplesoft-erp"
  },
  {
    id: 8,
    title: "SAP Security S/4HANA FIORI",
    description: "Comprehensive SAP S/4HANA Security program covering authorization, role management, user administration, and Fiori application security...",
    instructor: "Certified SAP Security Professional",
    modules: 18,
    duration: "50 Days",
    students: 500,
    rating: 4.9,
    price: "Contact for Fees",
    badge: "Professional Program",
    badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
    icon: "🔐",
    image: "/traning8.jpg",
    slug: "sap-security-s4hana-fiori"
  }
];

interface RecommendedCoursesProps {
  currentCourseId?: number;
  currentCourseSlug?: string;
  limit?: number;
  title?: string;
}

export const RecommendedCourses = memo(({
  currentCourseId,
  currentCourseSlug,
  limit = 4,
  title = "Recommended Courses"
}: RecommendedCoursesProps) => {
  const navigate = useNavigate();

  const handleEnrollClick = useCallback(() => {
    window.open('https://wa.me/919573529800?text=Hi, I am interested in joining your course', '_blank');
  }, []);

  const handleViewDetails = useCallback((slug: string) => {
    navigate(`/course/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  // Filter out current course and limit results
  const recommendedCourses = allCourses
    .filter(course =>
      course.id !== currentCourseId &&
      course.slug !== currentCourseSlug
    )
    .slice(0, limit);

  if (recommendedCourses.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-sf-display">
            <span className="text-[#1E3A5F]">{title.split(' ')[0]} </span>
            <span className="text-[#0066CC]">{title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-base md:text-lg text-[#4A7BA7] max-w-3xl mx-auto leading-relaxed font-sf-display font-normal">
            Explore more courses to advance your career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer group rounded-xl"
            >
              {/* Course Image with Badge */}
              <div className="relative h-44 bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  width="400"
                  height="176"
                  loading="eager"
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
                    <span>{course.students}+ Learners</span>
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
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white text-xs font-semibold py-2 font-sf-display transition-all duration-200"
                    onClick={handleEnrollClick}
                  >
                    Enquire Now
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2 border-[#FF8800] text-[#FF8800] hover:bg-[#FF8800] hover:text-white hover:border-[#FF8800] text-xs font-semibold py-2 font-sf-display transition-all duration-200"
                    onClick={() => handleViewDetails(course.slug)}
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
});

RecommendedCourses.displayName = 'RecommendedCourses';
