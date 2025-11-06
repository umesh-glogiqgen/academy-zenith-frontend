import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { ContactForm } from "@/components/ContactForm";

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
    title: "Generative AI Professional Training Program",
    subtitle: "Master Modern AI with Prompt Engineering, LLMs, RAG & AI Agents",
    description: "The Generative AI Professional Training Program by RR Technos is designed to empower learners with real-world skills in modern Artificial Intelligence. This program blends practical learning with core AI concepts such as Prompt Engineering, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and AI Agents. You'll gain hands-on experience in designing, developing, and deploying intelligent AI solutions that drive innovation.",
    instructor: "Certified AI Engineer",
    duration: "2 Months (60 Days)",
    modules: 8,
    students: 600,
    rating: 4.9,
    price: "Contact for Fees",
    level: "Beginner to Advanced",
    certificate: "Generative AI Certified Professional",
    nextBatch: "January 10, 2025",
    icon: "🤖",
    image: "/traning6.jpg",
    badge: "Future Tech",
    badgeColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    curriculum: [
      {
        module: "Generative AI Fundamentals",
        duration: "1 week",
        topics: [
          "What is Generative AI?",
          "Understanding AI vs Machine Learning vs Deep Learning",
          "Evolution of AI Models – GPT, Claude, Gemini, Llama, Mistral",
          "AI Ecosystem Overview – OpenAI, Anthropic, Meta, Google",
          "Where industries use Generative AI today (Healthcare, Finance, Marketing, Education)",
          "Popular Tools: ChatGPT, Copilots, AI Writers, and Designers"
        ]
      },
      {
        module: "Prompt Engineering Made Simple",
        duration: "1 week",
        topics: [
          "Zero-shot, One-shot, and Few-shot Prompting",
          "Writing Prompts for Q&A, Summarization, and Idea Generation",
          "Role-based Prompts and Persona Creation",
          "Chain of Thought and Step-by-Step Reasoning",
          "Prompt Debugging and Optimization Techniques"
        ]
      },
      {
        module: "Advanced Prompt Engineering",
        duration: "1 week",
        topics: [
          "Designing Multi-turn Conversations with Memory",
          "Templates and Variables in Prompts",
          "Advanced Prompt Structures and Context Management",
          "Output Control and Formatting (Style, Tone, Length)",
          "Ethics, Bias, and Responsible AI Usage"
        ]
      },
      {
        module: "NLP & LLM Concepts",
        duration: "1 week",
        topics: [
          "Architecture of Large Language Models (Transformers)",
          "Tokenization and Embeddings",
          "Fine-tuning vs Prompt-tuning vs Instruction-tuning",
          "Understanding Attention Mechanisms",
          "Practical: Using OpenAI & Hugging Face APIs"
        ]
      },
      {
        module: "RAG – Retrieval-Augmented Generation",
        duration: "1.5 weeks",
        topics: [
          "What is RAG and Why It's Important",
          "Setting up Vector Databases (FAISS, Pinecone, Chroma)",
          "Integrating External Knowledge Sources",
          "Building Knowledge-based Chatbots",
          "Practical: Enterprise Q&A Bot (Legal / Healthcare)"
        ]
      },
      {
        module: "AI Agents & Workflow Automation",
        duration: "1.5 weeks",
        topics: [
          "Introduction to Agentic AI",
          "Planning, Reasoning, and Decision-making",
          "Multi-step Automation with LangChain & OpenAI Functions",
          "API Integrations (Email, Sheets, Slack, Browser, etc.)",
          "End-to-End AI Agent Project"
        ]
      },
      {
        module: "Generative AI Applications",
        duration: "1.5 weeks",
        topics: [
          "Chatbots for Customer Support & FAQs",
          "Text-to-SQL Applications",
          "Text-to-Image and Content Generation Tools",
          "AI Copilots for Productivity Automation",
          "Real-World Projects (Legal Assistant, Retail Search, Healthcare Bot)"
        ]
      },
      {
        module: "AI Deployment & Integration",
        duration: "1.5 weeks",
        topics: [
          "Streamlit / Flask for App Deployment",
          "Frontend Chat UI Design",
          "API Key Security and Integration",
          "Hosting AI Apps (Vercel, Render, AWS)",
          "End-to-End Deployment Practice"
        ]
      }
    ],
    highlights: [
      "Professional Instructor-Led Training",
      "100% Practical Oriented",
      "Access to Recorded Sessions",
      "Resume Preparation & Mock Interview Support",
      "Dedicated Technical Support",
      "100% Job Assistance",
      "Daily 1 Hour Training Sessions",
      "Batch-wise WhatsApp Group",
      "Real-World AI Projects Portfolio",
      "Industry-aligned Curriculum",
      "Online & Offline Training Modes"
    ],
    prerequisites: [
      "Basic programming concepts (helpful but not mandatory)",
      "Computer literacy and basic IT knowledge",
      "No prior AI/ML experience required",
      "Willingness to learn and practice"
    ],
    faqs: [
      {
        question: "What is Generative AI and why should I learn it?",
        answer: "Generative AI is a rapidly growing field that enables machines to create new content like text, images, and code. It's transforming industries including healthcare, finance, marketing, and education. Learning Generative AI opens doors to high-demand careers in one of the fastest-growing technology domains."
      },
      {
        question: "Do I need programming experience to join this course?",
        answer: "No prior programming or AI experience is required. We start from fundamentals and build up to advanced concepts. Basic computer literacy and willingness to learn are sufficient to get started."
      },
      {
        question: "What will I be able to do after completing this program?",
        answer: "After completing this program, you'll be able to: Use Generative AI tools confidently, Design high-quality prompts that produce precise results, Build RAG systems and AI-powered chatbots, Develop automation workflows and custom AI Agents, and Deliver real-time AI apps and portfolio projects."
      },
      {
        question: "What is the duration and mode of training?",
        answer: "The complete program is 2 months (60 days) with daily 1-hour instructor-led sessions. Training is available in both online and offline modes to suit your convenience."
      },
      {
        question: "Will I get hands-on practice during the training?",
        answer: "Yes! The training is 100% practical-oriented. You'll work on real-world projects including AI chatbots, RAG systems, automation workflows, and deploy live applications."
      },
      {
        question: "Do you provide job assistance after course completion?",
        answer: "Yes! We provide 100% job assistance including resume preparation, mock interviews, placement support, and interview coordination with our network of hiring companies."
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
        answer: "Generative AI professionals are in high demand across industries. Career opportunities include AI Engineer, Prompt Engineer, ML Engineer, AI Application Developer, RAG Specialist, AI Solutions Architect, and AI Consultant roles."
      },
      {
        question: "Which AI tools and technologies will I learn?",
        answer: "You'll learn to work with leading AI tools and frameworks including ChatGPT, OpenAI APIs, LangChain, Vector Databases (FAISS, Pinecone, Chroma), Hugging Face, Streamlit, Flask, and deployment platforms like Vercel and AWS."
      }
    ]
  },

  "sap-security-s4hana-fiori": {
    id: 7,
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
    image: "/traning8.jpg",
    badge: "Professional Program",
    badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
    curriculum: [
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
    prerequisites: [
      "Basic understanding of SAP ERP systems (helpful but not mandatory)",
      "Computer literacy and basic IT knowledge",
      "No prior SAP Security experience required",
      "Willingness to learn and practice"
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
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-yellow-50/30 to-yellow-100/50 relative overflow-hidden">
        {/* Decorative wave background */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <svg className="absolute top-0 right-0 h-full w-full" viewBox="0 0 500 800" preserveAspectRatio="xMaxYMid slice">
            <path d="M0,0 C150,100 200,200 200,400 C200,600 150,700 0,800 L500,800 L500,0 Z" fill="#fef3c7" opacity="0.5"/>
            <path d="M100,0 C250,150 300,250 300,450 C300,650 250,750 100,800 L500,800 L500,0 Z" fill="#fde68a" opacity="0.3"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Button
            variant="ghost"
            className="text-primary mb-6 hover:bg-primary/10"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <Badge className={`${course.badgeColor} text-white border-none mb-4 px-4 py-1.5 text-sm`}>
                {course.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-primary/90 mb-6 font-medium">
                {course.subtitle}
              </p>
              <p className="text-primary/70 mb-8 leading-relaxed text-base">
                {course.description}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-5 h-5 text-[#237d8c]" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5 text-[#237d8c]" />
                  <span className="font-medium">{course.students}+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="w-5 h-5 text-[#237d8c]" />
                  <span className="font-medium">{course.modules} Modules</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#e78b46] hover:bg-[#d67535] text-white shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
                  onClick={handleEnrollClick}
                >
                  Enroll Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c] hover:text-white hover:border-[#237d8c] transition-all duration-200 font-semibold"
                  onClick={handleScheduleDemo}
                >
                  Schedule Free Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Course Info Card with Image */}
            <div className="relative">
              <Card className="p-0 overflow-hidden shadow-2xl border-2 border-gray-100 bg-white">
                {/* Course Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    width="600"
                    height="256"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary border-none shadow-md px-3 py-1.5">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 inline mr-1" />
                      {course.rating}
                    </Badge>
                  </div>
                </div>

                {/* Course Information */}
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-6 text-primary">Course Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Instructor:</span>
                      <span className="font-semibold text-primary text-right max-w-[60%]">{course.instructor}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Duration:</span>
                      <span className="font-semibold text-primary text-right max-w-[60%]">{course.duration}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Students:</span>
                      <span className="font-semibold text-primary">{course.students}+</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-primary">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Certificate:</span>
                      <span className="font-semibold text-primary text-right max-w-[60%]">{course.certificate}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Next Batch:</span>
                      <span className="font-semibold text-primary">{course.nextBatch}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Level:</span>
                      <span className="font-semibold text-primary text-right max-w-[60%]">{course.level}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600 font-medium">Price:</span>
                      <span className="font-bold text-[#e78b46] text-lg">{course.price}</span>
                    </div>
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
                    <div key={index}>
                      {/* Section Header */}
                      {module.section && (index === 0 || module.section !== course.curriculum[index - 1]?.section) && (
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
                              {module.topics.map((topic: string, topicIndex: number) => (
                                <li key={topicIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
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
                    className="w-full bg-[#237d8c] hover:bg-[#1e6b76] text-white transition-all duration-200 font-semibold"
                    onClick={handleEnrollClick}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#237d8c] text-[#237d8c] hover:bg-[#237d8c] hover:text-white hover:border-[#237d8c] transition-all duration-200 font-semibold"
                    onClick={handleScheduleDemo}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Free Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-all duration-200 font-semibold"
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
                <h3 className="font-bold text-xl mb-4 text-orange-800">🎉 BENEFITS OF RR TECHNOLOGIES </h3>
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
      <ContactForm/>
    </>
  );
}