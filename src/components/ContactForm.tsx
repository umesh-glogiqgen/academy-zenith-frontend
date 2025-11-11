import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const ContactForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    others: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Workday HCM",
    "Workday Finance",
    "Workday Integration",
    "Workday Extend",
    "PeopleSoft",
    "SAP Security",
    "ServiceNow",
    "Generative AI",
    "Cloud Technologies"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you can integrate with your backend API
      // For now, we'll just log the data and show success
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        others: ""
      });

      alert("Thank you! Your inquiry has been submitted successfully. We'll contact you soon.");

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Sorry, there was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Hi RR Technos! I'm interested in learning more about your courses. 
    
Name: ${formData.name}
Course Interest: ${formData.course || 'General Inquiry'}
Email: ${formData.email}`;

    const whatsappUrl = `https://wa.me/919573529800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="pb-10 bg-muted/30" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-professional-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tech journey? Get in touch with us for course details,
            demo sessions, or any queries. We're here to help you succeed!
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-professional-secondary">
              Get Started Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="mt-1"
                  placeholder={isFocused ? "" : "Enter your full name"}
                
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  onFocus={() => setIsFocused2(true)}
                  onBlur={() => setIsFocused2(false)}
                  className="mt-1"
                  placeholder={isFocused2 ? "" : "your.email@example.com"}
                  
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone (with country code) *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={isFocused3 ? "" : "+91 98xxxxxxx"}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setIsFocused3(true)}
                  onBlur={() => setIsFocused3(false)}
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="course">Course of Interest *</Label>
                <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course} value={course}>
                        {course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="others">Additional Information</Label>
                <Textarea
                  id="others"
                  placeholder="Any specific questions, preferred batch timings, or requirements..."
                  value={formData.others}
                  onChange={(e) => setFormData({ ...formData, others: e.target.value })}
                  className="mt-1"
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  variant="course"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
                <a href="tel:+919573529800" className="flex-1">
                  <Button type="button" variant="outline" size="lg" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>

              </div>
            </form>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-professional-secondary">
                Visit Our Training Center
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-professional-primary mt-1" />
                  <div>
                    <p className="font-medium">RR Technos Training Center- Hyderabad</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Hig-66,+Neera+Cafe+Building,+E-seva+line,+Near+Temple+bus+stand,+K+P+H+B+Phase+3,+Kukatpally,+Hyderabad,+Telangana+500072"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-professional-primary hover:underline transition-colors cursor-pointer"
                    >
                      Hig-66, Neera Cafe Building, E-seva line, Near Temple bus stand,
                      K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
                    </a>

                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-professional-primary mt-1" />
                  <div>
                    <p className="font-medium">RR Technos Training Center- Bangalore</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=%231218,+3rd+Floor,+'B'+Sector+6th+Main,+KHB+complex,+Yelahanka+New+Town,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-professional-primary hover:underline transition-colors cursor-pointer"
                    >
                      India Location:
                      #1218, 3rd Floor, 'B' Sector 6th Main, KHB complex, Yelahanka New Town, India.
                    </a>

                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-professional-primary mt-1" />
                  <div>
                    <p className="font-medium">RR Technos Training Center- Bangalore</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=%23222,+1st+floor+Rajendra+Prasad+building,+KVB+bank+road,+Rosemount+international+preschool+Thubarahalli,+Bangalore+560066"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-professional-primary hover:underline transition-colors cursor-pointer"
                    >
                      #222, 1st floor Rajendra Prasad building, KVB bank road , Rosemount international preschool Thubarahalli, Bangalore 560066
                    </a>

                  </div>
                </div>



                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-professional-primary" />
                  <div>
                    <p className="font-medium">Phone & WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+91 95735 29800</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-professional-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">rrtechnos.training@gmail.com</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/HKWRCvsbtStBQvuw5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </a>
            </Card>

            {/* Google Map Embed */}
            <Card className="p-4">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7940749073706!2d78.38945731489615!3d17.492816588018943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f7a52fb9f7%3A0x1f8b1c4d4e9c3b2a!2sKPHB%20Phase%203%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1643875234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RR Technos Training Center Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};