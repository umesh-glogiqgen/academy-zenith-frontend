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
            <Card key={index} className="card-elegant p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-education-accent text-education-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
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