import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Brain } from "lucide-react";
import rrtechnosLogo from "@/assets/rr-technos-logo.png";
import { WhatsAppContact } from "@/components/WhatsAppContact";
import { Navigate, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate()
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 118; // Top bar (38px) + Main nav (80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white-900 text-primary">
      {/* Newsletter Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Latest RR Technos Insights
            </h3>
            <p className="text-secondary-400 mb-8 text-lg">
              Subscribe to our newsletter and be the first to know about new AI solutions, 
              training courses, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6" onClick={() => navigate("/") }>
              <img
                src={rrtechnosLogo}
                alt="RR TECHNOS"
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-2xl text-primary font-bold">RR Technos</div>
              </div>
            </div>
            <p className="text-primary mb-6 leading-relaxed text-sm">
              Empowering educational institutions and learners worldwide with cutting-edge AI solutions.
              Transform learning experiences with our personalized AI tutoring systems and chatbots.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/profile.php?id=61580823174367" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-orange-50">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="https://x.com/RrTechnos2025" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-orange-50">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/rr-technos-268165387/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-orange-50">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://www.instagram.com/rrtechnos/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-orange-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-orange-50">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3 text-primary text-sm">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-orange-400 transition-colors cursor-pointer">Home</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">Training Courses</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-orange-400 transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-orange-400 transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Training Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Training Programs</h4>
            <ul className="space-y-3 text-primary text-sm">
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">Workday HCM</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">Workday Finance</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">Workday Integration</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">Workday Extend</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">ServiceNow</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">PeopleSoft ERP</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">SAP Security</a></li>
              <li><a href="#courses" onClick={(e) => handleNavClick(e, '#courses')} className="hover:text-orange-400 transition-colors cursor-pointer">Generative AI </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h4>
            <ul className="space-y-4 text-primary text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hig-66,+Neera+Cafe+Building,+E-seva+line,+Near+Temple+bus+stand,+K+P+H+B+Phase+3,+Kukatpally,+Hyderabad,+Telangana+500072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                >
                RR Technos Training Center

Hig-66, Neera Cafe Building, E-seva line, Near Temple bus stand, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span>+91 95735 29800</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="break-all">rrtechnos.training@gmail.com</span>
              </li>
            </ul>
    
            <div className="mt-6">
              <WhatsAppContact
                phoneNumber="+919573529800"
                message="Hi! I would like to get a free consultation about your training courses. Can you please help me?"
                buttonText="Get Free Consultation"
                className="w-60 h-10 bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary text-sm">
              © 2024 Logiq Gen. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <p className="text-primary text-sm">
              Made with ❤️ Logiqgen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};