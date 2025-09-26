import { useState, useEffect } from "react";
import { X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on every page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Popup will show again on next page visit
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#237d8c] to-[#349198] text-white py-1 shadow-lg animate-in slide-in-from-top duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now: +91 9573529800</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="font-medium">Email: rrtechnos@gmail.com</span>
            </div>
          </div>

          {/* CTA and Close Button */}
          <div className="flex items-center gap-3">
            <Button 
              variant="hero" 
              size="sm" 
              className="hidden md:flex bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
            >
              Get Free Consultation
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded transition-colors"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};