import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Brain } from "lucide-react";
import rrtechnosLogo from "@/assets/rr-technos-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-white-900 text-secondary">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Latest AI Education Insights
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
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <div className="flex items-center gap-3">
              <img 
                src={rrtechnosLogo} 
                alt="RR TECHNOS" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-2xl font-bold">Logiq Gen</div>
                <div className="text-sm text-orange-400">AI-Powered Education</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering educational institutions and learners worldwide with cutting-edge AI solutions. 
              Transform learning experiences with our personalized AI tutoring systems and chatbots.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* AI Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">AI Solutions</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Chatbot Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personalized Learning Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LLM Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI BUDDY for Kids</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Educational Analytics</a></li>
            </ul>
          </div>

          {/* Training Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Training Courses</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Prompt Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OpenAI API Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Claude Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Llama Fine-tuning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Ethics in Education</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                <span>
                  Secunderabad, Telangana<br />
                  India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>hello@logiqgen.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Logiq Gen. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            <p className="text-gray-400 text-sm">
              Made with ❤️ for AI-powered learning
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};