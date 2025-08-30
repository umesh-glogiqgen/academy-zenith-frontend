import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Latest Courses & Tech Trends
            </h3>
            <p className="text-background/80 mb-8 text-lg">
              Subscribe to our newsletter for Workday updates, AI trends, career tips, 
              and exclusive course offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="hero" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6 text-professional-primary">RR Technos</h4>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering professionals worldwide with enterprise technology skills. 
              From Workday to AI - One Platform for Your Tech Growth.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-professional-primary cursor-pointer smooth-transition" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-professional-primary cursor-pointer smooth-transition" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-professional-primary cursor-pointer smooth-transition" />
              <Linkedin className="w-5 h-5 text-background/60 hover:text-professional-primary cursor-pointer smooth-transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {['About Us', 'Courses', 'Events & Workshops', 'Blog', 'Success Stories', 'Admissions'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-professional-primary smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Popular Courses</h5>
            <ul className="space-y-3">
              {['Workday HCM', 'Workday Finance', 'Workday Integration', 'AI & Machine Learning', 'Cybersecurity', 'ServiceNow'].map((course) => (
                <li key={course}>
                  <a href="#" className="text-background/80 hover:text-professional-primary smooth-transition">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Contact Info</h5>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-professional-primary" />
                <span className="text-background/80">rrtechnos@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-professional-primary" />
                <span className="text-background/80">+91 9573529800</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-professional-primary mt-1" />
                <span className="text-background/80 text-sm">
                  Hig-66, Neera Cafe Building, E-seva line, Near Temple bus stand, 
                  K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
                </span>
              </div>
              <div className="mt-4">
                <Button variant="hero" size="sm" className="w-full">
                  WhatsApp: +91 9573529800
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-background/60">
            <p>&copy; 2024 RR Technos. All rights reserved.</p>
            <p>Transforming Careers with Enterprise Technology Training</p>
          </div>
        </div>
      </div>
    </footer>
  );
};