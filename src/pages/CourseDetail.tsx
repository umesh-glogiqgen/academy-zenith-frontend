import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Award, 
  CheckCircle, 
  MessageCircle, 
  Download,
  Play,
  Calendar,
  Target,
  Globe,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  HelpCircle
} from "lucide-react";
import { useState, useEffect } from "react";

// Course data based on your provided documents
const courseData: Record<string, any> = {
  "workday-hcm": {
    id: 1,
    title: "Workday HCM (Human Capital Management)",
    subtitle: "Complete Workday HCM Certification Program",
    description: "Master Workday HCM with comprehensive training covering Core HCM, Talent Management, Compensation, Benefits Administration, and advanced reporting functionalities. Human Resources Management Workday HCM is offered on the cloud and was created from the ground up.",
    instructor: "Workday Certified Expert",
    duration: "60 Days",
    modules: 15,
    students: 450,
    rating: 4.8,
    price: "Contact for Fees",
    level: "Beginner to Advanced",
    certificate: "Workday HCM Certified",
    nextBatch: "January 15, 2025",
    icon: "👥",
    image: "/traning1.jpg",
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    curriculum: [
      {
        module: "Core HR Functions",
        duration: "1 week",
        topics: [
          "Maintaining employee data",
          "Payroll processing",
          "Benefits administration", 
          "Onboarding new hires",
          "Compliance management"
        ]
      },
      {
        module: "Talent Management",
        duration: "2 weeks",
        topics: [
          "Employee recruitment and hiring",
          "Performance management",
          "Career development planning",
          "Succession planning",
          "Learning and development programs"
        ]
      },
      {
        module: "Workforce Planning & Analytics",
        duration: "1.5 weeks",
        topics: [
          "Workforce analytics and reporting",
          "Strategic workforce planning",
          "Data visualization and insights",
          "Predictive analytics",
          "Big data management"
        ]
      },
      {
        module: "Time Tracking & Attendance",
        duration: "1 week",
        topics: [
          "Time and attendance management",
          "Absence tracking",
          "Leave management",
          "Schedule planning",
          "Time reporting"
        ]
      },
      {
        module: "Advanced HCM Features",
        duration: "1.5 weeks",
        topics: [
          "Advanced reporting and analytics",
          "Custom configurations",
          "Integration capabilities",
          "Mobile access features",
          "Security and compliance"
        ]
      }
    ],
    highlights: [
      "100% Placement Assistance",
      "Real-time Project Experience", 
      "Industry Expert Trainers",
      "Cloud-based Learning",
      "Global Enterprise Tool Training",
      "Interview Preparation"
    ],
    prerequisites: [
      "Basic understanding of HR processes",
      "Computer literacy",
      "No prior Workday experience required"
    ],
    faqs: [
      {
        question: "What is the Workday HCM?",
        answer: "Human Resources Management Workday HCM is offered on the cloud and was created from the ground up. It is the only worldwide enterprise tool that combines recruitment, payroll, time and attendance, benefits, and talent management."
      },
      {
        question: "What are the HCM modules in Workday?",
        answer: "Management of human resources, Administration advantages, Management of talent, Planning the workforce and analytics, Analytics of big data, Recruitment, Payroll assistance, Tracking time."
      },
      {
        question: "Is Workday hard to learn?",
        answer: "In comparison to other HCM collections, Workday is extremely user-friendly, simple to use, and can satisfy the customer's need efficiently. The majority of firms use it to oversee the objectives, goals, and activities of their staff."
      },
      {
        question: "What type of software is Workday?",
        answer: "Workday is a provider of cloud-based software with a focus on solutions for financial and human capital management."
      },
      {
        question: "Which is better SAP HCM or Workday?",
        answer: "The Workday HCM solution may be your best option if your firm has operations across a number of different Western nations and you value detailed reports and data visualisations."
      }
    ]
  },

  "workday-finance": {
    id: 2,
    title: "Workday Financial Management",
    subtitle: "Complete Financial Management Certification",
    description: "Workday Finance is a cloud-based financial management software solution designed to streamline and automate financial workflows with accounting, budgeting, forecasting, banking and reporting features that increase performance while decreasing the time and effort spent managing finances.",
    instructor: "Finance Domain Expert",
    duration: "75 Days",
    modules: 15,
    students: 320,
    rating: 4.7,
    price: "Contact for Fees",
    level: "Intermediate to Advanced",
    certificate: "Workday Finance Certified",
    nextBatch: "February 1, 2025",
    icon: "💰",
    image: "/traning2.jpg",
    badge: "High Demand",
    badgeColor: "bg-gradient-to-r from-green-500 to-green-600",
    curriculum: [
      {
        module: "Core Concept and Navigation",
        duration: "1 week",
        topics: [
          "Core Concepts",
          "Tenant management",
          "Basic Navigation",
          "Functional Area overview"
        ]
      },
      {
        module: "Organization and Work Tags",
        duration: "1.5 weeks",
        topics: [
          "Security Policies",
          "Organization setup",
          "Reorganization processes",
          "Company creation",
          "Bank Setup and Routing Rules",
          "Organization Hierarchy",
          "Cost Center Organization",
          "Work tags management"
        ]
      },
      {
        module: "Financial Accounting Setup",
        duration: "2 weeks",
        topics: [
          "Setup Currency and Fiscal Schedule",
          "Account Set configuration",
          "Account Control Rule Set",
          "Accounting Posting Rule Set",
          "Account Translation Rule Set",
          "Default Reporting Book",
          "Journal Reversal Option",
          "Company Accounting Details",
          "Create and Maintain Ledger",
          "Custom Validation"
        ]
      },
      {
        module: "Process Accounting Journals",
        duration: "2 weeks",
        topics: [
          "Financial accounting flow",
          "Financial Transaction flow",
          "Create and manage Journals",
          "Copy, Repost, Cancel Journal",
          "Journal Approval Procedure",
          "Recurring Journal Entry Template",
          "Journal Setup and configuration"
        ]
      },
      {
        module: "Suppliers and Customer Management",
        duration: "2 weeks",
        topics: [
          "Supplier setup and creation",
          "Spend Categories and Purchase Items",
          "Supplier Invoices and Adjustments",
          "Customer setup and creation",
          "Revenue Categories and Sales Items",
          "Customer Invoices and Receipts",
          "Customer payment processing"
        ]
      },
      {
        module: "Advanced Financial Operations",
        duration: "1.5 weeks",
        topics: [
          "Settlement processes",
          "Cash flow management",
          "Period close procedures",
          "Bank Reconciliation",
          "Financial Reporting",
          "Expense Report management"
        ]
      }
    ],
    highlights: [
      "Cloud-based Financial Management",
      "Real-time Reporting",
      "Automated Processes", 
      "Centralized Data Management",
      "Compliance & Risk Management",
      "Scalability for Growth"
    ],
    prerequisites: [
      "Basic accounting knowledge",
      "Understanding of financial processes",
      "Computer literacy"
    ],
    faqs: [
      {
        question: "What Is Workday Finance?",
        answer: "Workday Finance is a cloud-based financial management software solution designed to streamline and automate financial workflows with accounting, budgeting, forecasting, banking and reporting features that increase performance while decreasing the time and effort spent managing finances."
      },
      {
        question: "What are the benefits of Workday finance?",
        answer: "Workday Finance offers increased financial visibility, real-time reporting, automated processes, increased efficiency, centralized data management and scalability for growing organisations, with robust compliance and risk management features."
      }
    ]
  },

  "workday-integration": {
    id: 3,
    title: "Workday Integration",
    subtitle: "Complete Integration Certification Program",
    description: "Master Workday Integration with comprehensive training covering EIB, Core Connectors, Workday Studio, Custom Reports, and advanced integration patterns. Learn to design, implement and test integrations using various tools and technologies.",
    instructor: "Integration Specialist",
    duration: "60 Days",
    modules: 19,
    students: 275,
    rating: 4.9,
    price: "Contact for Fees",
    level: "Intermediate to Advanced",
    certificate: "Workday Integration Certified",
    nextBatch: "January 20, 2025",
    icon: "🔧",
    image: "/traning3.jpg",
    badge: "Technical",
    badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    curriculum: [
      {
        module: "Workday Integration Overview & Reporting",
        duration: "1 week",
        topics: [
          "What is Workday Integration?",
          "Reporting fundamentals",
          "Creating Sample reports",
          "Running Standard Reports",
          "Reports & Navigation"
        ]
      },
      {
        module: "Business Objects & Custom Reports",
        duration: "2 weeks",
        topics: [
          "Terminology & Concepts Of Business Objects",
          "Data Sources and Report Fields",
          "Creating Custom Reports (Simple)",
          "Field types and applications",
          "Editing Custom Reports",
          "Sorts & Filters implementation"
        ]
      },
      {
        module: "Core Connectors",
        duration: "2 weeks",
        topics: [
          "Integration Architecture Overview",
          "Integration Cloud Connect",
          "Integration System templates",
          "Core Connector: Worker",
          "Integration Services in Core connector",
          "Change Detection Procedure",
          "Document Transformation Integration",
          "XSLT Formatting using XTT and ETV"
        ]
      },
      {
        module: "EIB (Enterprise Interface Builder)",
        duration: "2.5 weeks",
        topics: [
          "EIB Overview and Design Pattern",
          "EIB Limitations",
          "Workday Public Webservices overview",
          "Workday Reports-as-a-Service",
          "Developing Inbound EIB",
          "Developing Outbound EIB",
          "Custom Report Transformation",
          "Loading Customer Transactional Data"
        ]
      },
      {
        module: "Workday Studio",
        duration: "2.5 weeks",
        topics: [
          "Workday Studio Overview",
          "Assembly Components",
          "Creating Assembly Projects",
          "Message Flow through Assemblies",
          "Using RaaS and Workday Web Services",
          "Testing and Debugging Studio Integrations",
          "Advanced Studio Concepts",
          "Exception handling in studio"
        ]
      }
    ],
    highlights: [
      "Hands-on Integration Projects",
      "EIB & Studio Expertise",
      "Real-world Scenarios",
      "API Integration Skills",
      "Data Transformation Techniques",
      "Performance Optimization"
    ],
    prerequisites: [
      "Programming knowledge (SQL, Java, XML)",
      "Software development experience",
      "Understanding of integration concepts"
    ],
    faqs: [
      {
        question: "What Is Workday Integration Training?",
        answer: "Workday Integration Training program offers guidance and assistance in connecting Workday software to various systems and apps."
      },
      {
        question: "Who Should Attend Workday Integration Training?",
        answer: "This training is designed for IT professionals, business analysts or any stakeholder working regularly with Workday who want to learn system and application integration."
      }
    ]
  },

  "workday-extend": {
    id: 4,
    title: "Workday Extend",
    subtitle: "Custom Application Development Platform",
    description: "Master Workday Extend platform to build custom applications using PMD, AMD, SMD components. Learn to create secure, scalable applications with proper authentication, UI widgets, and business logic integration.",
    instructor: "Platform Development Expert",
    duration: "40 Days",
    modules: 10,
    students: 150,
    rating: 4.6,
    price: "Contact for Fees",
    level: "Advanced",
    certificate: "Workday Extend Certified",
    nextBatch: "February 15, 2025",
    icon: "⚡",
    image: "/traning4.jpg",
    badge: "Advanced",
    badgeColor: "bg-gradient-to-r from-orange-500 to-orange-600",
    curriculum: [
      {
        module: "Introduction to Workday Extend",
        duration: "3 days",
        topics: [
          "Overview of Workday Extend Platform",
          "Use Cases & Benefits",
          "Structure of Extend Applications",
          "Introduction to PMD, AMD, and SMD"
        ]
      },
      {
        module: "Presentation Layer - PMD, AMD, SMD",
        duration: "1 week",
        topics: [
          "PMD: Page configuration, layout controls, file structure",
          "AMD: App-level settings and deployment",
          "SMD: Service layer configuration",
          "Demo: Walkthrough of a PMD file and rendering UI"
        ]
      },
      {
        module: "Endpoints & Authentication",
        duration: "4 days",
        topics: [
          "Creating and using Endpoints",
          "Types of Authentication: OAuth, Basic Auth",
          "Secure endpoint configuration",
          "Demo: Secure endpoint call from Extend App"
        ]
      },
      {
        module: "UI Widgets in Workday Extend",
        duration: "4 days",
        topics: [
          "Common Widgets: TextInput, Dropdown, Button",
          "Layout and conditional logic",
          "Demo: Dynamic widget rendering"
        ]
      },
      {
        module: "Model Components - Security & Business Logic",
        duration: "1 week",
        topics: [
          "Security Domain: Defining access",
          "Business Objects: Designing and using",
          "Task & Attachments management",
          "Integration with Workday BPs",
          "Demo: Creating and securing a custom BO"
        ]
      }
    ],
    highlights: [
      "Custom Application Development",
      "End-to-end Project Implementation",
      "Security Best Practices",
      "UI/UX Design Principles",
      "Integration with Workday Core",
      "Deployment Strategies"
    ],
    prerequisites: [
      "Workday HCM/Finance knowledge",
      "Basic programming concepts",
      "Understanding of web technologies"
    ],
    faqs: [
      {
        question: "Do you offer any discount/offer?",
        answer: "Yes, offers keep changing from time to time. You can chat with us or call our training coordinator for more details."
      },
      {
        question: "Is there any demo video which I can watch before enrolling?",
        answer: "Yes, we have provided a Demo video section on each course page so that you can get a glimpse into the course you want to enroll."
      }
    ],
    projectInfo: "A simple app will be created and used throughout the course to demonstrate real-world implementation scenarios."
  },

  "ai-machine-learning": {
    id: 6,
    title: "AI & Machine Learning with Python",
    subtitle: "Complete AI/ML Development Program",
    description: "Master Python, Machine Learning, and Generative AI with hands-on projects. Learn to build AI applications using OpenAI, LangChain, and modern ML frameworks.",
    instructor: "AI Specialist & Senior Developer",
    duration: "90 Days",
    modules: 25,
    students: 600,
    rating: 4.9,
    price: "Contact for Fees",
    level: "Beginner to Advanced",
    certificate: "AI/ML Certified Developer",
    nextBatch: "January 10, 2025",
    icon: "🤖",
    image: "/traning6.jpg",
    badge: "Future Tech",
    badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    curriculum: [
      {
        module: "Python Programming Foundation",
        duration: "3 weeks",
        topics: [
          "Python Basics and Syntax",
          "Data Structures and Algorithms",
          "Object-Oriented Programming",
          "File Handling and Exception Management",
          "Libraries: NumPy, Pandas, Matplotlib"
        ]
      },
      {
        module: "Machine Learning Fundamentals",
        duration: "4 weeks",
        topics: [
          "Introduction to ML Concepts",
          "Supervised vs Unsupervised Learning",
          "Linear and Logistic Regression",
          "Decision Trees and Random Forest",
          "Model Evaluation and Validation"
        ]
      },
      {
        module: "Generative AI & LLMs",
        duration: "4 weeks",
        topics: [
          "OpenAI API Integration",
          "LangChain Framework",
          "Vector Databases and Embeddings",
          "RAG (Retrieval-Augmented Generation)",
          "Building AI Chatbots"
        ]
      }
    ],
    highlights: [
      "Hands-on Project Portfolio",
      "Industry-relevant Technologies",
      "AI/ML Career Guidance",
      "Open Source Contributions",
      "Mentorship Program",
      "Job Placement Support"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Mathematics fundamentals",
      "Computer literacy"
    ],
    faqs: [
      {
        question: "What programming experience do I need?",
        answer: "Basic programming concepts are helpful, but we start from Python fundamentals and build up to advanced AI/ML concepts."
      },
      {
        question: "Will I work on real projects?",
        answer: "Yes, you'll build multiple real-world projects including AI chatbots, ML models, and complete AI applications for your portfolio."
      }
    ]
  }
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [selectedModule, setSelectedModule] = useState(0);
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const course = courseId ? courseData[courseId] : null;

  // Scroll to top when component mounts or courseId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-4">The course you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleEnrollClick = () => {
    const message = `Hi! I'm interested in enrolling for the ${course.title} course.

📚 Course: ${course.title}
⏱️ Duration: ${course.duration}
📅 Next Batch: ${course.nextBatch}
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
    const message = `Hello! I'd like to schedule a FREE DEMO session for ${course.title}.

📚 Course: ${course.title}
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
            className="text-primary mb-6"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className={`${course.badgeColor} text-primary mb-4`}>
                {course.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-primary/90 mb-6">
                {course.subtitle}
              </p>
              <p className="text-primary/80 mb-8 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span>{course.students}+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span>{course.modules} Modules</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#237d8c] hover:bg-white/90"
                  onClick={handleEnrollClick}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#237d8c]"
                  onClick={handleScheduleDemo}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Free Demo
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-64 h-48 object-cover rounded-lg mx-auto shadow-2xl"
                />
              </div>
              <Card className="p-6 bg-white/10 backdrop-blur border-white/20">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <div className="text-sm opacity-80">Next Batch</div>
                    <div className="font-semibold">{course.nextBatch}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Level</div>
                    <div className="font-semibold">{course.level}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Certificate</div>
                    <div className="font-semibold">{course.certificate}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Price</div>
                    <div className="font-semibold">{course.price}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Curriculum */}
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <BookOpen className="w-8 h-8 mr-3 text-[#237d8c]" />
                  Course Curriculum ({course.modules} Modules)
                </h2>
                
                <div className="space-y-4">
                  {course.curriculum?.map((module: any, index: number) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedModule === index ? 'bg-[#e78b46] text-white' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedModule(index)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">
                          Module {index + 1}: {module.module}
                        </h3>
                        <Badge variant="outline" className={selectedModule === index ? 'border-white text-white' : ''}>
                          {module.duration}
                        </Badge>
                      </div>
                      
                      {selectedModule === index && (
                        <div className="mt-4 space-y-2">
                          {module.topics.map((topic: string, topicIndex: number) => (
                            <div key={topicIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              {/* Course Highlights */}
              <Card className="p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-[#237d8c]" />
                  Course Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights?.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Project Information */}
              {course.projectInfo && (
                <Card className="p-8 mb-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Award className="w-8 h-8 mr-3 text-[#237d8c]" />
                    Hands-on Project
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{course.projectInfo}</p>
                </Card>
              )}

              {/* FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <HelpCircle className="w-8 h-8 mr-3 text-[#237d8c]" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {course.faqs.slice(0, showAllFAQs ? course.faqs.length : 3).map((faq: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <button
                          className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50"
                          onClick={() => toggleFAQ(index)}
                        >
                          <span className="font-semibold text-[#237d8c]">{faq.question}</span>
                          {expandedFAQ === index ? (
                            <ChevronUp className="w-5 h-5 text-[#237d8c]" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-[#237d8c]" />
                          )}
                        </button>
                        {expandedFAQ === index && (
                          <div className="p-4 pt-0 text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {course.faqs.length > 3 && (
                    <div className="mt-6 text-center">
                      <Button 
                        variant="outline" 
                        onClick={() => setShowAllFAQs(!showAllFAQs)}
                      >
                        {showAllFAQs ? 'Show Less' : `Show All ${course.faqs.length} FAQs`}
                      </Button>
                    </div>
                  )}
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="p-6 sticky top-6">
                <h3 className="font-bold text-xl mb-4">Course Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-semibold">{course.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold">{course.students}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate:</span>
                    <span className="font-semibold">{course.certificate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Batch:</span>
                    <span className="font-semibold">{course.nextBatch}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button 
                    className="w-full bg-[#237d8c] hover:bg-[#1e6b76]"
                    onClick={handleEnrollClick}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleScheduleDemo}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Free Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('tel:+919573529800')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Quick Contact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#237d8c]" />
                      <span>+91 9573529800</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-secondary-600" />
                      <span>WhatsApp Support</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Prerequisites */}
              {course.prerequisites && (
                <Card className="p-6">
                  <h3 className="font-bold text-xl mb-4">Prerequisites</h3>
                  <div className="space-y-2">
                    {course.prerequisites.map((prereq: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm">{prereq}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Special Offer */}
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <h3 className="font-bold text-xl mb-4 text-orange-800">🎉 Special Offer!</h3>
                <div className="space-y-2 text-sm text-orange-700">
                  <p>✅ Free Demo Session</p>
                  <p>✅ 100% Placement Support</p>
                  <p>✅ Real-time Project Training</p>
                  <p>✅ Industry Expert Trainers</p>
                  <p className="font-semibold text-orange-800 mt-3">
                    Limited time offer - Contact us today!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}