import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development with modern technologies including React, Node.js, and MongoDB.",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 2847,
    rating: 4.9,
    price: "$299",
    image: "/feturedCourses1.jpg"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description: "Master data analysis, visualization, and machine learning with Python and real-world projects.",
    instructor: "Dr. Michael Chen",
    duration: "16 weeks",
    students: 1923,
    rating: 4.8,
    price: "$399",
    image: "/feturedCourses2.jpg"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description: "Comprehensive course covering SEO, social media marketing, content creation, and analytics.",
    instructor: "Emma Rodriguez",
    duration: "8 weeks",
    students: 3241,
    rating: 4.9,
    price: "$199",
    image: "/feturedCourses3.png"
  }
];

export const FeaturedCourses = () => {
  const handleEnquiry = (courseTitle: string, coursePrice: string, courseDuration: string) => {
    const message = `Hi RR Technos Team! 👋

I'm interested in enrolling for the *${courseTitle}* course.

📚 Course Details:
• Duration: ${courseDuration}
• Price: ${coursePrice}

Could you please provide me with more information about:
✅ Course curriculum and syllabus
✅ Batch timings and schedule
✅ Prerequisites (if any)
✅ Certification details
✅ Payment options
✅ Next batch start date

Looking forward to hearing from you!

Thank you! 😊`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919573529800?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }
  return (
    <section className="pb-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sf-display">
            <span className="text-[#1E3A5F]">Featured </span><span className="text-[#0066CC]">Courses</span>
          </h2>
          <p className="text-xl text-[#4A7BA7] max-w-3xl mx-auto font-sf-display font-normal">
            Discover our most popular courses designed by industry experts to help you
            achieve your career goals and master in-demand skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  width="400"
                  height="192"
                  loading="eager"
                  className="w-full h-48 object-cover"
                />

                <div className="absolute top-4 right-4 bg-[#0066CC] text-white px-4 py-2 rounded-full text-sm font-bold font-sf-display shadow-lg">
                  {course.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#FF6B35] font-sf-display">
                  {course.title}
                </h3>

                <p className="text-[#6B7280] mb-4 text-sm leading-relaxed font-sf-display font-normal">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-[#6B7280]">
                  <div className="flex items-center gap-2 font-sf-display">
                    <Clock className="w-4 h-4 text-[#6B7280]" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 font-sf-display">
                    <Users className="w-4 h-4 text-[#6B7280]" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2 text-[#0066CC] font-sf-display">
                    <Star className="w-4 h-4 fill-current text-[#0066CC]" />
                    {course.rating}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#6B7280] font-sf-display font-normal">
                    by {course.instructor}
                  </div>
                  <Button
                    className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2 text-sm font-semibold rounded-md font-sf-display"
                    size="sm"
                    onClick={() => handleEnquiry(course.title, course.price, course.duration)}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white font-sf-display font-semibold px-8 py-3"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};