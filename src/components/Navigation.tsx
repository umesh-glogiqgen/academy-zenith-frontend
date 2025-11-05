import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Award } from "lucide-react";
// Import your logo from assets
import rrtechnosLogo from "@/assets/logo-rr-technos.png";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Training Courses" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact" }
] as const;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Reset scroll to top on home page load (only if no hash)
  useEffect(() => {
    if (isHomePage && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Handle hash navigation when arriving on home page
  useEffect(() => {
    if (isHomePage && location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarHeight = 118;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [isHomePage, location]);

  // Scroll spy effect to track active section with throttling
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const navbarHeight = 118;
          const scrollPosition = window.scrollY + navbarHeight + 10; // Small offset after navbar

          
          // Find which section we're currently in
          let currentSection = ""; // Default to home

          for (const link of NAV_LINKS) {
            const sectionId = link.href.replace('#', '');
            const section = document.getElementById(sectionId);

            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;

              // Check if scroll position is within this section
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = sectionId;
                break;
              }
            }
          }

          setActiveSection(prev => prev !== currentSection ? currentSection : prev);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check on mount and after a short delay
    handleScroll();
    const initialTimer = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialTimer);
    };
  }, [isHomePage]);

  const handleLogoClick = () => {
    setIsMenuOpen(false);

    if (!isHomePage) {
      navigate('/');
      return;
    }

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

    if (!isHomePage) {
      navigate('/#contact');
      return;
    }

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

    // If not on home page, navigate to home with hash
    if (!isHomePage) {
      navigate(`/${href}`);
      return;
    }

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
            <span className="font-semibold">+91 95735 29800</span>
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
                className="h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={handleLogoClick}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-base font-medium cursor-pointer transition-all duration-300 group ${
                      isActive
                        ? 'text-[#0066CC]'
                        : 'text-gray-700 hover:text-[#0066CC]'
                    }`}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-[#0066CC] transition-all duration-300 ${
                        isActive
                          ? 'opacity-100 scale-x-100'
                          : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={handleConsultationClick}
                className="bg-[#FF8800] hover:bg-[#FF9920] text-white transition-all duration-300 px-6 hover:scale-105 hover:shadow-lg"
              >
                Free Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-900 transition-transform duration-300 hover:scale-110 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg relative z-50 w-full animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 sm:px-6 py-4">
              <div className="space-y-4">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`block font-medium py-2 transition-all duration-300 cursor-pointer relative pl-3 ${
                        isActive
                          ? 'text-[#0066CC] border-l-4 border-[#0066CC]'
                          : 'text-gray-700 hover:text-[#0066CC] border-l-4 border-transparent hover:border-[#0066CC]'
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button
                    onClick={handleConsultationClick}
                    className="w-full bg-[#FF8800] hover:bg-[#FF9920] text-white transition-all duration-300 hover:shadow-lg"
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