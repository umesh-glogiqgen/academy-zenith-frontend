import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
// Import your logo from assets
import rrtechnosLogo from "@/assets/logo-rr-technos.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "AI Solutions" },
    { href: "#aibuddy", label: "AI BUDDY" },
    { href: "#courses", label: "Training Courses" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 relative z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>hello@rrtechnos.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9876543210</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-orange-400">🏆 Trusted by 500+ Institutions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - With RR TECHNOS Logo */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={rrtechnosLogo} 
                alt="RR TECHNOS" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-xs .text-gradient-primary-600 font-medium ">AI-Powered Education Solutions</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative .text-gradient-primary-700 hover:text-orange-500 font-medium text-sm transition-colors duration-300 
                           after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] 
                           after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Login
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-colors">
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg relative z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-gray-700">
                    Login
                  </Button>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};