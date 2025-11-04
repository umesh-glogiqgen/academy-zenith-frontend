import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Home, Clock, MessageCircle, Rocket } from "lucide-react";

export default function ComingSoon() {
  const navigate = useNavigate();
  const location = useLocation();
  const courseData = location.state?.courseData;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleContactUs = () => {
    const message = courseData
      ? `Hi! I'm interested in the ${courseData.title} course. When will the course page be available?`
      : "Hi! I'd like to know about upcoming courses.";

    window.open(`https://wa.me/919573529800?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleBackToHome = () => {
    // Navigate back to home page and scroll to courses section
    navigate('/', { state: { scrollTo: 'courses' } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20 px-6">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="mb-8">
            <Rocket className="w-24 h-24 mx-auto text-[#0066CC]" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#1E3A5F] mb-4">
            Coming Soon
          </h1>

          {/* Course-specific message */}
          {courseData && (
            <Card className="p-6 bg-white shadow-lg mb-8 border-2 border-blue-100">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-4xl">{courseData.icon}</span>
                <h2 className="text-2xl font-bold text-[#0066CC]">{courseData.title}</h2>
              </div>
              <p className="text-gray-700 mb-4">{courseData.description}</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{courseData.duration}</span>
                </div>
                <span>•</span>
                <span>{courseData.modules} Modules</span>
                <span>•</span>
                <span className={`px-3 py-1 rounded-full text-white text-xs ${courseData.badgeColor}`}>
                  {courseData.badge}
                </span>
              </div>
            </Card>
          )}

          <p className="text-lg md:text-xl text-gray-600 mb-8">
            This course page is under construction. We're working hard to bring you detailed course information soon!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8"
              onClick={handleBackToHome}
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0066CC] text-[#0066CC] hover:bg-blue-50 px-8"
              onClick={handleContactUs}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg mb-16">
            <h3 className="font-bold text-lg text-[#1E3A5F] mb-3">In the meantime...</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li>✅ Browse our other available courses</li>
              <li>✅ Contact us on WhatsApp for course inquiries</li>
              <li>✅ Get notified when this course page goes live</li>
              <li>✅ Schedule a free demo session</li>
            </ul>
          </div>

          {/* Extra spacing before footer */}
          <div className="h-20"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
