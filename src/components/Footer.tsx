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
              Stay Updated with Latest Courses
            </h3>
            <p className="text-background/80 mb-8 text-lg">
              Subscribe to our newsletter and be the first to know about new courses, 
              special offers, and learning tips.
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
            <h4 className="text-2xl font-bold mb-6 text-education-accent">EduZenith</h4>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering learners worldwide with high-quality, accessible education. 
              Transform your future with our expert-led courses and supportive community.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-education-accent cursor-pointer smooth-transition" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-education-accent cursor-pointer smooth-transition" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-education-accent cursor-pointer smooth-transition" />
              <Linkedin className="w-5 h-5 text-background/60 hover:text-education-accent cursor-pointer smooth-transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Quick Links</h5>
            <ul className="space-y-3">
              {['Browse Courses', 'About Us', 'Instructors', 'Student Reviews', 'Success Stories', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-education-accent smooth-transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Support</h5>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Refund Policy', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/80 hover:text-education-accent smooth-transition">
                    {link}
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
                <Mail className="w-5 h-5 text-education-accent" />
                <span className="text-background/80">support@eduzenith.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-education-accent" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-education-accent" />
                <span className="text-background/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-background/60">
            <p>&copy; 2024 EduZenith. All rights reserved.</p>
            <p>Made with ❤️ for learners worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};