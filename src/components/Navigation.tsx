import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Building, Phone, Mail } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#courses", label: "Courses" },
    { href: "#events", label: "Events & Workshops" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact Us" }
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Contact Bar */}
      <div className="bg-professional-secondary text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>rrtechnos@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>Call us: +91 9573529800</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-professional-primary rounded-lg flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-professional-secondary">RR Technos</div>
                <div className="text-xs text-professional-primary font-medium">From Workday to AI -- One Platform for Your Tech Growth</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-professional-secondary/80 hover:text-professional-primary smooth-transition font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" className="text-professional-secondary">
                Login
              </Button>
              <Button variant="default" className="bg-professional-primary">
                Book Free Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-professional-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-professional-secondary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-professional-secondary/80 hover:text-professional-primary smooth-transition font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="ghost" className="text-professional-secondary justify-start">
                    Login
                  </Button>
                  <Button variant="default" className="bg-professional-primary justify-start">
                    Book Free Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scrolling Banner */}
        <div className="bg-professional-primary/10 py-2 overflow-hidden">
          <div className="whitespace-nowrap animate-scroll">
            <span className="text-professional-secondary text-sm font-medium px-8">
              Learn Online & Offline | Real-Time Projects | Placement Support | Live Classes | Hands-on Labs | Career Guidance | Flexible Learning Modes | Expert Trainers | Industry-Aligned Courses
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};