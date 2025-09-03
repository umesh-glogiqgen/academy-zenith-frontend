import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Software Developer",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "This platform completely transformed my career. The web development course was comprehensive and the instructors were incredibly supportive. I landed my dream job within 3 months of completing the program."
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist",
    company: "Analytics Pro",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c15c?w=150&q=80",
    rating: 5,
    text: "The machine learning course exceeded all my expectations. The hands-on projects and real-world applications made complex concepts easy to understand. Highly recommend!"
  },
  {
    name: "David Kim",
    role: "Marketing Manager",
    company: "Growth Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "As someone with no prior marketing experience, I was amazed at how quickly I picked up digital marketing strategies. The course structure is perfect for beginners and experts alike."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 feature-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful graduates who have transformed their careers 
            through our comprehensive learning programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group p-8 relative cursor-pointer overflow-hidden bg-white hover:bg-gradient-to-br hover:from-professional-primary/8 hover:to-professional-accent/8 border hover:border-professional-primary/40 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 ease-out"
            >
              {/* Animated Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-professional-primary/60 group-hover:scale-125 transition-all duration-500" />
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-professional-primary/5 to-professional-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Rating Stars with Animation */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-professional-accent text-professional-accent group-hover:fill-professional-primary group-hover:text-professional-primary group-hover:scale-110 transition-all duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground group-hover:text-professional-secondary/90 mb-6 leading-relaxed italic transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info with Enhanced Hover */}
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-transparent group-hover:ring-professional-primary/50 group-hover:scale-110 transition-all duration-300"
                    />
                    {/* Glowing ring effect */}
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-professional-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-professional-secondary group-hover:text-professional-primary transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-professional-accent transition-colors duration-300">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};