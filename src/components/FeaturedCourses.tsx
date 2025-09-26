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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most popular courses designed by industry experts to help you 
            achieve your career goals and master in-demand skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className="group cursor-pointer overflow-hidden bg-white hover:bg-gradient-to-br hover:from-professional-primary/5 hover:to-professional-accent/5 border hover:border-professional-primary/30 shadow-md hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ease-out"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-professional-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute top-4 right-4 bg-professional-primary text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-professional-accent transition-colors duration-300">
                  {course.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-professional-secondary group-hover:text-professional-primary transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground group-hover:text-professional-secondary/80 mb-4 text-sm leading-relaxed transition-colors duration-300">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 group-hover:text-professional-primary transition-colors duration-300">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 group-hover:text-professional-primary transition-colors duration-300">
                    <Users className="w-4 h-4" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-professional-accent text-professional-accent group-hover:fill-professional-primary group-hover:text-professional-primary transition-colors duration-300" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground group-hover:text-professional-secondary transition-colors duration-300">
                    by {course.instructor}
                  </div>
                  <Button 
                    variant="course" 
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
          <Button variant="outline" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};