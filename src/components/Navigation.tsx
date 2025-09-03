import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Phone, Mail } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Main Navigation */}
      <nav 
        className={`bg-white/98 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-lg py-2" : "shadow-md py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#237d8c] to-[#349198] rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#1a4a52]">RR Technos</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[#5a8088] hover:text-[#237d8c] font-medium text-sm transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-[#237d8c] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c] hover:text-white transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#237d8c] to-[#349198] hover:from-[#349198] hover:to-[#46a6a5] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#1a4a52]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-[#e8f4f1] bg-white mt-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#5a8088] hover:text-[#237d8c] font-medium px-4 py-2 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 px-4 pt-4 border-t border-[#e8f4f1]">
                  <Button 
                    variant="outline" 
                    className="justify-start border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c] hover:text-white"
                  >
                    Login
                  </Button>
                  <Button 
                    className="justify-start bg-gradient-to-r from-[#237d8c] to-[#349198] text-white"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};