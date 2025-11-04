import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Award } from "lucide-react";
// Import your logo from assets
import rrtechnosLogo from "@/assets/logo-rr-technos.png";
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#courses", label: "Training Courses" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" }
  ];
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    const element = document.getElementById('home');

    if (element) {
      const navbarHeight = 118; // Top bar (38px) + Main nav (80px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback to scroll to top if home section not found
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  const handleConsultationClick = () => {
    setIsMenuOpen(false);

    const element = document.getElementById('contact');
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');

    // Function to scroll to element with retry logic for lazy-loaded sections
    const scrollToElement = (retryCount = 0) => {
      const element = document.getElementById(targetId);

      if (element) {
        const navbarHeight = 118; // Top bar (38px) + Main nav (80px)
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // For lazy-loaded sections (like contact), scroll toward the bottom first
        // This triggers the IntersectionObserver to load the section
        if (retryCount === 0) {
          // Scroll to near the bottom to trigger lazy loading
          window.scrollTo({
            top: document.documentElement.scrollHeight - window.innerHeight - 200,
            behavior: 'smooth'
          });

          // Retry after lazy section has time to load
          setTimeout(() => scrollToElement(1), 800);
        } else if (retryCount < 3) {
          // Additional retries with increasing delays
          setTimeout(() => scrollToElement(retryCount + 1), 300);
        }
      }
    };

    // Small delay to ensure mobile menu closes first
    setTimeout(() => scrollToElement(0), 100);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#0066CC] text-white text-sm py-2 fixed top-0 left-0 right-0 z-40 w-full">
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              <span>rrtechnos.training@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
             
              <span></span>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <Phone className="w-3 h-3" />
            <span className="font-semibold">+91 9573529800</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - With RR TECHNOS Logo */}
      <nav className="bg-white shadow-md fixed top-[38px] left-0 right-0 z-40 w-full border-t-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={rrtechnosLogo}
                alt="RR TECHNOS"
                className="h-12 w-auto object-contain cursor-pointer"
                onClick={handleLogoClick}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative text-gray-700 hover:text-[#0066CC] font-medium text-base transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={handleConsultationClick}
                className="bg-[#FF8800] hover:bg-[#FF9920] text-white transition-colors px-6"
              >
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
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg relative z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button
                    onClick={handleConsultationClick}
                    className="w-full bg-[#FF8800] hover:bg-[#FF9920] text-white"
                  >
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