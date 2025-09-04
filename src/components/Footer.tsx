import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send, MessageCircle, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a4a52] text-white">
      {/* Contact Form Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
            
            {/* Contact Form */}
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Name *</label>
                  <Input 
                    type="text" 
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Email *</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone (with country code) *</label>
                  <Input 
                    type="tel" 
                    placeholder="+91 9999999999"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Course of Interest</label>
                  <select className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white">
                    <option value="">Select Course</option>
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
                    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", 
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
                    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80"                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Button 
                className="mt-6 bg-gradient-to-r from-[#237d8c] to-[#349198] hover:from-[#349198] hover:to-[#46a6a5] text-white px-8"
              >
                Submit Enquiry
                <Send className="ml-2 w-4 h-4" />
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
            <h4 className="text-2xl font-bold mb-6 text-[#46a6a5]">RR Technos</h4>
            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              From Workday to AI - One Platform for Your Tech Growth. 
              Industry-leading training institute with expert trainers and 100% placement support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#46a6a5] flex-shrink-0 mt-1" />
                <span className="text-white/80 text-sm">
                  Hig-66, Neera Cafe Building, E-seva line, Near Temple bus stand, 
                  K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#46a6a5]" />
                <span className="text-white/80 text-sm">+91 9573529800</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#46a6a5]" />
                <span className="text-white/80 text-sm">rrtechnos@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#46a6a5]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-[#46a6a5] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-[#46a6a5] transition-colors text-sm">
                  All Courses
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-white/80 hover:text-[#46a6a5] transition-colors text-sm">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-[#46a6a5] transition-colors text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/80 hover:text-[#46a6a5] transition-colors text-sm">
                  Blog & Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#46a6a5]">Popular Courses</h4>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">Workday HCM</li>
              <li className="text-white/80 text-sm">Workday Finance</li>
              <li className="text-white/80 text-sm">Workday Integration</li>
              <li className="text-white/80 text-sm">ServiceNow</li>
              <li className="text-white/80 text-sm">AI & Machine Learning</li>
              <li className="text-white/80 text-sm">SAP Security</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#46a6a5]">Connect With Us</h4>
            
            {/* WhatsApp Button */}
            <Button 
              className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open('https://wa.me/919573529800', '_blank')}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp: 9573529800
            </Button>
            
            {/* Social Icons */}
            <p className="text-white/80 mb-4 text-sm">Follow us on social media</p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#46a6a5] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#46a6a5] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#46a6a5] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#46a6a5] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Google Map Link */}
            <div className="mt-6">
              <Button 
                variant="outline"
                className="w-full bg-transparent border-white/30 text-white hover:bg-white/10"
                onClick={() => window.open('https://maps.app.goo.gl/HKWRCvsbtStBQvuw5', '_blank')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 RR Technos. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              From Workday to AI - One Platform for Your Tech Growth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};