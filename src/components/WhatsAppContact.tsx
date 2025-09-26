import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppContactProps {
  phoneNumber: string; // WhatsApp phone number (with country code, no spaces/symbols)
  message?: string; // Pre-typed message
  buttonText?: string;
  className?: string;
  variant?: 'button' | 'icon' | 'floating';
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppContact: React.FC<WhatsAppContactProps> = ({
  phoneNumber,
  message = "Hi! I'm interested in your professional training courses. Can you please provide more information?",
  buttonText = "Chat on WhatsApp",
  className = "",
  variant = 'button',
  size = 'md'
}) => {
  // Clean phone number (remove spaces, dashes, parentheses)
  const cleanPhoneNumber = phoneNumber.replace(/[^\d+]/g, '');
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  // Floating WhatsApp Button
  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    );
  }

  // Icon only variant
  if (variant === 'icon') {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`inline-flex items-center justify-center p-2 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 ${className}`}
        title="Chat on WhatsApp"
      >
        <MessageCircle className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'}`} />
      </button>
    );
  }

  // Button variant (default)
  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 ${className}`}
      size={size}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      {buttonText}
    </Button>
  );
};

// Pre-configured WhatsApp components for different sections
export const WhatsAppContactOptions = {
  // For course inquiries
  CourseInquiry: (props: Partial<WhatsAppContactProps>) => (
    <WhatsAppContact
      message="Hi! I'm interested in learning more about your courses. Could you please send me detailed information about available programs, schedules, and pricing?"
      buttonText="Ask About Courses"
      {...props}
    />
  ),

  // For general support
  GeneralSupport: (props: Partial<WhatsAppContactProps>) => (
    <WhatsAppContact
      message="Hello! I need some assistance regarding your professional training services. Can someone help me?"
      buttonText="Get Support"
      {...props}
    />
  ),

  // For pricing inquiries
  PricingInquiry: (props: Partial<WhatsAppContactProps>) => (
    <WhatsAppContact
      message="Hi! I would like to know about the pricing for your professional training courses. Can you please share the fee structure and any available discounts?"
      buttonText="Get Pricing Info"
      {...props}
    />
  ),

  // For enrollment
  Enrollment: (props: Partial<WhatsAppContactProps>) => (
    <WhatsAppContact
      message="Hello! I'm ready to enroll in your professional training program. Can you guide me through the enrollment process?"
      buttonText="Enroll Now"
      {...props}
    />
  ),

  // For custom training
  CustomTraining: (props: Partial<WhatsAppContactProps>) => (
    <WhatsAppContact
      message="Hi! I'm interested in custom training solutions for my organization. Can we discuss corporate training options?"
      buttonText="Corporate Training"
      {...props}
    />
  )
};

// WhatsApp Contact Bar Component
export const WhatsAppContactBar: React.FC<{
  phoneNumber: string;
  showFloating?: boolean;
}> = ({ phoneNumber, showFloating = true }) => {
  return (
    <>
      {/* Contact bar in header/footer */}
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4" />
        <span>{phoneNumber}</span>
        <WhatsAppContact
          phoneNumber={phoneNumber}
          variant="icon"
          size="sm"
          className="ml-2"
        />
      </div>

      {/* Floating WhatsApp button */}
      {showFloating && (
        <WhatsAppContact
          phoneNumber={phoneNumber}
          variant="floating"
        />
      )}
    </>
  );
};

export default WhatsAppContact;