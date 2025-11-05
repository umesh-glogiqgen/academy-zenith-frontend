import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  ArrowLeft,
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Award,
  CheckCircle2,
  ChevronDown,
  Shield,
  Settings,
  FileCheck,
  Zap
} from "lucide-react";

const SAPSecurityS4HANAFioriCourse = () => {
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState(0);
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const courseData = {
    id: "sap-security-s4hana-fiori",
    title: "SAP Security S/4HANA FIORI",
    subtitle: "Professional Training Program",
    description: "Comprehensive SAP S/4HANA Security program designed for professionals aspiring to build strong expertise in managing, implementing, and securing SAP S/4HANA environments. Master authorization concepts, role management, user administration, and Fiori application security.",
    instructor: "Certified SAP Security Professional",
    duration: "50 Days (25 Days SAP Security + 25 Days S/4HANA FIORI)",
    modules: 18,
    students: 500,
    rating: 4.9,
    price: "Contact for Fees",
    level: "Beginner to Advanced",
    certificate: "SAP Security & S/4HANA FIORI Certified",
    nextBatch: "January 20, 2025",
    icon: "🔐",
    image: "/sap-security-course.jpg", // You'll need to add this image
    badge: "Professional Program",
    badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
    
    curriculum: [
      // SAP Security Modules
      {
        module: "Introduction to SAP and SAP Security",
        duration: "3 days",
        section: "SAP Security (25 Days)",
        topics: [
          "ERP – SAP Why SAP is needed",
          "Modules and the purpose of it",
          "Major SAP modules: FI | MM | SD | QM | PP | HR",
          "Job function and responsibilities of a security professional",
          "Why SAP Security is required in SAP ERP system",
          "Transaction codes",
          "SAP Landscape (DEVELOPMENT, QUALITY and PRODUCTION)"
        ]
      },
      {
        module: "SAP Security Tables and Reports",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "SAP Security Tables and Reports",
          "USBOX and USOBT",
          "USOBX_C and USBOT_C"
        ]
      },
      {
        module: "Authorization Check Configuration",
        duration: "3 days",
        section: "SAP Security (25 Days)",
        topics: [
          "SU21 - Authorization Object Management",
          "SU22 - Authorization Object Configuration",
          "Check indicator /su24 changes",
          "SU25 - Authorization Upgrade"
        ]
      },
      {
        module: "Single User Administration (SU01)",
        duration: "3 days",
        section: "SAP Security (25 Days)",
        topics: [
          "Create user",
          "Reset/Change/Deactivate Password",
          "Assign Roles/Profiles",
          "Lock/Unlock user",
          "Delete user",
          "Understanding the Tabs: Parameter, License, Default, Role, Profile, Address"
        ]
      },
      {
        module: "Mass User Administration (SU10)",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "Create users",
          "Deactivate mass user's password",
          "Assign Roles/profiles",
          "Lock/unlock users",
          "Delete mass users",
          "Disadvantages of SU10"
        ]
      },
      {
        module: "Advanced User Concepts",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "User types",
          "User groups for the purpose to use it",
          "Forbidden Password restriction"
        ]
      },
      {
        module: "Role Administration",
        duration: "4 days",
        section: "SAP Security (25 Days)",
        topics: [
          "Role types: Single role, Master role – Derived role, Composite role",
          "Introduction to Authorization objects",
          "Activities/fields",
          "Important Authorization objects",
          "Add manually authorization objects/T-codes",
          "Deactivate authorization object",
          "Traffic lights",
          "Authorization generation",
          "Expert mode of role generation",
          "Mass Role/Profile generation",
          "Mass user comparison"
        ]
      },
      {
        module: "Role Transport",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "Transport request types",
          "Transport single/mass roles",
          "Release transport",
          "Import transport",
          "Role Download/upload",
          "How to delete the role from production system"
        ]
      },
      {
        module: "User Information System (SUIM)",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "User selection criteria",
          "Roles by complex selection criteria",
          "Comparison",
          "Change documents"
        ]
      },
      {
        module: "Troubleshooting and Restriction",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "Troubleshooting of authorization issue: SU53, STAUTHTRACE",
          "Restriction on Tables: Authorization group creation",
          "Map authorization group to Tables",
          "How to restrict a custom program",
          "Background job"
        ]
      },
      {
        module: "System Configuration and Implementation",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "Profile parameter setup",
          "Implementation Phases"
        ]
      },
      {
        module: "Next-Generation and Specialized Security",
        duration: "2 days",
        section: "SAP Security (25 Days)",
        topics: [
          "S/4 HANA and Fiori Security understanding",
          "HR Security overview"
        ]
      },
      // S/4HANA FIORI Modules
      {
        module: "Introduction to SAP S/4HANA",
        duration: "3 days",
        section: "S/4HANA FIORI (25 Days)",
        topics: [
          "Overview and evolution of SAP S/4HANA",
          "Versions and key innovations",
          "Difference between SAP S/4HANA, SAP ECC, and SAP HANA DB",
          "Architecture and components of SAP S/4HANA",
          "Security considerations for migration from ECC to S/4HANA",
          "Key points to consider during migration"
        ]
      },
      {
        module: "Authorizations and Role Management",
        duration: "5 days",
        section: "S/4HANA FIORI (25 Days)",
        topics: [
          "Authorization concept and framework in SAP S/4HANA",
          "Understanding authorization objects (e.g., S_SERVICE, S_RFCACL)",
          "Standard transactions: PFCG, SUIM, SU22, SU24, SU25, STAUTHTRACE",
          "Role transport and best practices",
          "Trusted RFC connections and OData authorization handling"
        ]
      },
      {
        module: "SAP Fiori Security and UX Evolution",
        duration: "5 days",
        section: "S/4HANA FIORI (25 Days)",
        topics: [
          "SAP Fiori UX strategy and design principles",
          "SAP Fiori architecture and integration",
          "Fiori Launchpad, Web Dispatcher, and communication channels",
          "Browser and OS compatibility overview",
          "Deployment options: Central Hub & Embedded Deployment",
          "Fiori Apps Reference Library and App activation"
        ]
      },
      {
        module: "Configuration and Implementation",
        duration: "5 days",
        section: "S/4HANA FIORI (25 Days)",
        topics: [
          "SAP Gateway configuration",
          "Embedded search setup",
          "Task list configuration in S/4HANA",
          "Implementing transactional apps",
          "Activating OData services and SAPUI5 components",
          "Creating ABAP front-end and back-end roles",
          "Assigning and testing roles in Fiori environment"
        ]
      },
      {
        module: "Custom Business Catalogs and Roles",
        duration: "4 days",
        section: "S/4HANA FIORI (25 Days)",
        topics: [
          "Creating custom catalogs, groups, and roles",
          "Custom Launchpad creation and configuration",
          "Target mapping and static tile setup",
          "Managing transport requests for catalogs and groups",
          "Understanding Spaces, Pages, and Sections",
          "Granting access for Fiori objects effectively"
        ]
      },
      {
        module: "Troubleshooting and Best Practices",
        duration: "3 days",
        section: "S/4HANA FIORI (25 Days)",
        topics: [
          "Common authorization and app issues",
          "Debugging and trace tools in Fiori and S/4HANA",
          "Troubleshooting missing authorizations",
          "Monitoring OData and Fiori apps",
          "Performance optimization and audit insights"
        ]
      }
    ],

    keyFeatures: [
      {
        icon: Shield,
        title: "Professional Instructor-Led Training",
        description: "Learn from Certified SAP Security Professionals with real-world experience in S/4HANA implementations and security management."
      },
      {
        icon: Settings,
        title: "100% Practical Oriented",
        description: "Hands-on training with live SAP systems, real-world scenarios, and comprehensive exercises covering all security aspects."
      },
      {
        icon: Clock,
        title: "Access to Recorded Sessions",
        description: "Daily 1-hour training sessions recorded and available the same day for revision and practice at your convenience."
      },
      {
        icon: FileCheck,
        title: "Resume Preparation & Mock Interview Support",
        description: "Professional guidance to build job-winning SAP Security resume with real-time mock interview sessions."
      },
      {
        icon: Zap,
        title: "Dedicated Technical Support",
        description: "Continuous technical help during practice sessions with batch-wise WhatsApp group for instant doubt resolution."
      },
      {
        icon: Award,
        title: "100% Job Assistance",
        description: "Complete placement support with interview coordination, job assistance, and career guidance throughout your journey."
      }
    ],

    highlights: [
      "Comprehensive 50-day program covering SAP Security & S/4HANA FIORI",
      "Learn from Certified SAP Security Professional",
      "Daily 1 Hour Training Sessions – instructor-led live classes",
      "Daily Recorded Sessions – available same day",
      "Resume Preparation Assistance",
      "Mock Interview Support",
      "Job Assistance & Placement Support",
      "Dedicated Technical Support",
      "Batch-wise WhatsApp Group",
      "Real-time Project Experience",
      "Industry-aligned curriculum",
      "Online & Offline training modes"
    ],

    learningOutcomes: [
      "Confidently manage SAP S/4HANA Security concepts end-to-end",
      "Configure and secure Fiori Launchpad and applications",
      "Handle OData authorization and role creation",
      "Implement and troubleshoot real-world security scenarios",
      "Manage user administration and mass operations",
      "Create and transport roles across landscapes",
      "Configure authorization objects and security tables",
      "Implement custom business catalogs and roles",
      "Debug and resolve authorization issues",
      "Handle migration security considerations"
    ],

    prerequisites: [
      "Basic understanding of SAP ERP systems (helpful but not mandatory)",
      "Computer literacy and basic IT knowledge",
      "No prior SAP Security experience required",
      "Willingness to learn and practice"
    ],

    trainingBenefits: [
      "Daily 1 Hour Training Sessions – instructor-led live classes",
      "Daily Recorded Sessions – available same day for revision",
      "Resume Preparation Assistance – build job-winning resume",
      "Mock Interview Support – boost interview confidence",
      "Job Assistance – placement opportunities and coordination",
      "Dedicated Technical Support – continuous help during practice",
      "Batch-wise WhatsApp Group – share updates and doubts",
      "Industry-recognized certification",
      "Real-time project experience",
      "Flexible online/offline learning modes"
    ],

    faqs: [
      {
        question: "What is SAP Security and why is it important?",
        answer: "SAP Security is a critical component that controls user access, protects sensitive data, and ensures compliance in SAP systems. It's essential for managing authorizations, roles, and protecting business-critical information in enterprise environments."
      },
      {
        question: "Do I need prior SAP experience to join this course?",
        answer: "No prior SAP experience is required. We start from basics and build up to advanced concepts. Basic understanding of IT and business processes is helpful but not mandatory."
      },
      {
        question: "What is the difference between SAP Security and S/4HANA FIORI Security?",
        answer: "SAP Security focuses on traditional ECC security concepts including roles, authorizations, and user management. S/4HANA FIORI Security extends these concepts to the modern Fiori user interface, OData services, and new authorization objects specific to S/4HANA."
      },
      {
        question: "Will I get hands-on practice during the training?",
        answer: "Yes! The training is 100% practical-oriented with access to live SAP systems. You'll work on real scenarios, create roles, manage users, and troubleshoot authorization issues."
      },
      {
        question: "What is the duration and mode of training?",
        answer: "The complete program is 50 days (25 days SAP Security + 25 days S/4HANA FIORI) with daily 1-hour instructor-led sessions. Training is available in both online and offline modes."
      },
      {
        question: "Do you provide job assistance after course completion?",
        answer: "Yes! We provide 100% job assistance including resume preparation, mock interviews, placement support, and interview coordination with our network of hiring companies."
      },
      {
        question: "Will I receive a certificate after completing the course?",
        answer: "Yes, you'll receive an industry-recognized SAP Security & S/4HANA FIORI certification from RR Technos upon successful completion of the program."
      },
      {
        question: "Can I access recorded sessions if I miss a live class?",
        answer: "Absolutely! All daily training sessions are recorded and made available the same day for revision and practice. You can access them anytime."
      },
      {
        question: "What kind of support will I get during the training?",
        answer: "You'll receive dedicated technical support throughout the program, batch-wise WhatsApp group for instant doubt resolution, resume preparation assistance, and mock interview sessions."
      },
      {
        question: "What are the career opportunities after this course?",
        answer: "SAP Security professionals are in high demand across industries. Career opportunities include SAP Security Consultant, Authorization Analyst, SAP Basis Security Specialist, S/4HANA Security Consultant, and SAP GRC Consultant roles."
      }
    ]
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleEnrollClick = () => {
    const message = `Hi! I'm interested in enrolling for the ${courseData.title} course.

📚 Course: ${courseData.title}
⏱️ Duration: ${courseData.duration}
📅 Next Batch: ${courseData.nextBatch}
📞 Phone: 9573529800

Could you please provide me with:
✅ Detailed curriculum and syllabus
✅ Fee structure and payment options
✅ Batch schedules and timings
✅ Prerequisites and requirements
✅ Certification details
✅ Placement assistance information

Looking forward to starting my learning journey!

Thank you! 😊`;

    window.open(`https://wa.me/919573529800?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleScheduleDemo = () => {
    const message = `Hello! I'd like to schedule a FREE DEMO session for ${courseData.title}.

📚 Course: ${courseData.title}
🎯 Request: Free Demo Session
📞 Phone: 9573529800

Please let me know available demo slots. I'm interested in:
✅ Course overview and curriculum
✅ Teaching methodology
✅ Hands-on session preview
✅ Q&A with instructor
✅ Career guidance discussion

Thank you!`;

    window.open(`https://wa.me/919573529800?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            className="text-[#237d8c] mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className={`${courseData.badgeColor} text-white border-none mb-4`}>
                {courseData.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-[#237d8c] mb-4">
                {courseData.title}
              </h1>
              <p className="text-xl text-[#237d8c]/90 mb-6">
                {courseData.subtitle}
              </p>
              <p className="text-[#237d8c]/80 mb-8 leading-relaxed">
                {courseData.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-[#237d8c]">
                  <Clock className="w-5 h-5" />
                  <span>{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-[#237d8c]">
                  <Users className="w-5 h-5" />
                  <span>{courseData.students}+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-[#237d8c]">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{courseData.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 text-[#237d8c]">
                  <BookOpen className="w-5 h-5" />
                  <span>{courseData.modules} Modules</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#e78b46] hover:bg-[#d67535] text-white"
                  onClick={handleEnrollClick}
                >
                  Enroll Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c]/10"
                  onClick={handleScheduleDemo}
                >
                  Schedule Free Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Course Info Card */}
            <div>
              <Card className="p-8">
                <img 
                  src={courseData.image} 
                  alt={courseData.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="font-bold text-xl mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-semibold">{courseData.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{courseData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold">{courseData.students}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="font-semibold">{courseData.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-semibold">{courseData.certificate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Batch:</span>
                    <span className="font-semibold">{courseData.nextBatch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{courseData.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold">{courseData.price}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#237d8c]">
              Why Choose Our SAP Security Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience professional SAP Security training with industry-aligned curriculum and complete career support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[#e78b46]">
                  <div className="w-12 h-12 mb-4 bg-[#e78b46]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#e78b46]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Curriculum */}
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <BookOpen className="w-8 h-8 mr-3 text-[#237d8c]" />
                  Course Curriculum ({courseData.modules} Modules)
                </h2>
                
                <div className="space-y-4">
                  {courseData.curriculum.map((module, index) => (
                    <div key={index}>
                      {/* Section Header */}
                      {(index === 0 || module.section !== courseData.curriculum[index - 1]?.section) && (
                        <div className="bg-gradient-to-r from-[#237d8c] to-[#349198] text-white px-4 py-3 rounded-lg font-bold text-lg mb-4 mt-6 first:mt-0">
                          {module.section}
                        </div>
                      )}
                      
                      {/* Module Content */}
                      <div 
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedModule === index ? 'bg-[#e78b46] text-white' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedModule(index)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-semibold text-lg">
                            Module {index + 1}: {module.module}
                          </h3>
                          <Badge variant="outline" className={selectedModule === index ? 'bg-white/20 border-white text-white' : ''}>
                            {module.duration}
                          </Badge>
                        </div>
                        
                        {selectedModule === index && (
                          <div className="mt-4 pt-4 border-t border-white/20">
                            <h4 className="font-semibold mb-3">Topics Covered:</h4>
                            <ul className="space-y-2">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Learning Outcomes */}
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Award className="w-8 h-8 mr-3 text-[#237d8c]" />
                  What You'll Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* FAQs */}
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {courseData.faqs.slice(0, showAllFAQs ? courseData.faqs.length : 5).map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                      <button
                        className="w-full text-left flex justify-between items-center py-2 hover:text-blue-600 transition-colors"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="font-semibold pr-4">{faq.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${
                            expandedFAQ === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFAQ === index && (
                        <p className="mt-3 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                
                {courseData.faqs.length > 5 && (
                  <Button 
                    variant="outline" 
                    className="mt-6 w-full"
                    onClick={() => setShowAllFAQs(!showAllFAQs)}
                  >
                    {showAllFAQs ? 'Show Less' : `Show ${courseData.faqs.length - 5} More FAQs`}
                  </Button>
                )}
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Course Highlights */}
              <Card className="p-6 mb-8 sticky top-8">
                <h3 className="text-xl font-bold mb-4 text-[#237d8c]">Course Highlights</h3>
                <ul className="space-y-3">
                  {courseData.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-bold mb-4 text-gray-900">Training Benefits</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    {courseData.trainingBenefits.slice(0, 7).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#e78b46] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button 
                    className="w-full bg-[#e78b46] hover:bg-[#d67535]"
                    onClick={handleEnrollClick}
                  >
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c]/10"
                    onClick={handleScheduleDemo}
                  >
                    Schedule Free Demo
                  </Button>
                </div>
              </Card>

              {/* Prerequisites */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#237d8c]">Prerequisites</h3>
                <ul className="space-y-3">
                  {courseData.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#e78b46] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-gray-700">{prereq}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#237d8c] to-[#349198] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your SAP Security Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our comprehensive SAP Security S/4HANA FIORI program and become a certified professional with 100% placement support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-[#237d8c] hover:bg-gray-100 px-8"
              onClick={handleEnrollClick}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#237d8c] px-8"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
          <p className="mt-6">
            📞 Call us: <a href="tel:9573529800" className="font-bold hover:underline">95735 29800</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SAPSecurityS4HANAFioriCourse;