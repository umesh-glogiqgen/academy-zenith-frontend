import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Award, Bot, Code, Brain, Target, CheckCircle, Zap, Globe, Mail, Phone, ArrowLeft, Download, Play, Calendar } from "lucide-react";
import React, { useState } from 'react';
import { RecommendedCourses } from "@/components/RecommendedCourses";
import { ContactForm } from "@/components/ContactForm";

// LogiqGen AI & ML Course Data based on the uploaded brochure
const courseData = {
  title: "Generative AI with Python",
  subtitle: "Complete AI & Machine Learning Program",
  tagline: "BRINGING CODE TO LIFE",
  company: "LogiqGen Private Limited",
  contact: {
    email: "info@logiqgen.com",
    phone: "9951293655"
  },
  overview: {
    duration: "16+ weeks",
    format: "Online Program",
    nextBatch: "September 10",
    level: "Beginner to Advanced",
    language: "English",
    certificate: "Industry Recognized"
  },
  description: "Master Python, Machine Learning, and Generative AI with hands-on projects. From neural networks to building AI chatbots with OpenAI, LangChain, and CrewAI. This comprehensive program combines traditional ML concepts with cutting-edge Generative AI technologies.",
  curriculum: [
    {
      module: "Python Introduction",
      duration: "3 weeks",
      topics: [
        "Coding & Programming Fundamentals",
        "Compiler vs Interpreter & Byte Code",
        "Python Installation & VSCode Setup",
        "Variables, Data Types & Control Structures",
        "Conditional & Looping Statements",
        "Object-Oriented Programming Concepts"
      ]
    },
    {
      module: "Python Basics & OOP",
      duration: "2 weeks", 
      topics: [
        "Classes and Objects Implementation",
        "Self, __init__, and Super concepts",
        "Methods and Attributes Management",
        "Inheritance & Polymorphism",
        "Access Modifiers & Encapsulation",
        "Abstraction Principles"
      ]
    },
    {
      module: "Machine Learning Foundation",
      duration: "4 weeks",
      topics: [
        "Data Preprocessing & EDA",
        "NumPy, Pandas, Matplotlib Libraries",
        "Statistics & Probability Theory",
        "Supervised & Unsupervised Learning",
        "Performance Metrics & Evaluation",
        "Real-world ML Projects"
      ]
    },
    {
      module: "Generative AI & Deep Learning",
      duration: "3 weeks",
      topics: [
        "Neural Networks & Transformer Architecture",
        "Vector Databases & Embeddings",
        "Ollama & RAG Implementation",
        "OpenAI API Integration",
        "Advanced Prompt Engineering",
        "Building Custom Chatbots"
      ]
    },
    {
      module: "Advanced AI Frameworks",
      duration: "2 weeks",
      topics: [
        "LangChain for AI Applications",
        "CrewAI Multi-Agent Systems",
        "Role-Based Agent Development",
        "Memory & Chain Management",
        "Intelligent Collaboration Systems",
        "Production Deployment"
      ]
    },
    {
      module: "Projects & Implementation",
      duration: "2+ weeks",
      topics: [
        "End-to-End AI Projects",
        "Portfolio Development",
        "Industry Case Studies",
        "Deployment Strategies",
        "Performance Optimization",
        "Final Capstone Project"
      ]
    }
  ],
  keyFeatures: [
    {
      icon: Bot,
      title: "Bujji Bot - Personalized Learning",
      description: "AI-powered learning companion that adapts to your learning pace and provides instant assistance"
    },
    {
      icon: Code,
      title: "Real-time Projects",
      description: "Hands-on projects with immediate feedback and practical applications in real-world scenarios"
    },
    {
      icon: Brain,
      title: "Innovative Lectures",
      description: "Cutting-edge curriculum designed by LogiqGen experts with latest industry practices"
    },
    {
      icon: Users,
      title: "One-on-One Mentorship",
      description: "Personal guidance from experienced AI professionals and industry experts"
    },
    {
      icon: Target,
      title: "Interview Preparation",
      description: "Comprehensive preparation for AI/ML roles at top companies with mock interviews"
    },
    {
      icon: Award,
      title: "Placement & Certification",
      description: "Job placement assistance and industry-recognized certificates from LogiqGen"
    }
  ],
  stats: {
    duration: "16+",
    modules: "6",
    projects: "50+",
    placement: "100%"
  },
  aboutCompany: "LogiqGen Private Limited specializes in LLM-based applications and chatbot services. We work on personalized education and content applications using LLMs. Our flagship product 'AI BUDDY' is a personalized AI learning application for kids. We leverage Python, Django, AI, and data analysis to create adaptive teaching technologies focused on superior student success."
};

const AIMLCourseDetailsPage = () => {
  const [activeModule, setActiveModule] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button className="flex items-center gap-2 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </button>
            <span className="mx-2">›</span>
            <span>Genrative AI</span>
            <span className="mx-2">›</span>
            <span className="text-orange-600 font-medium">Generative AI with Python</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=50&h=50&fit=crop&crop=center"
                  alt="LogiqGen Logo"
                  width="40"
                  height="40"
                  loading="eager"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <span className="text-lg font-semibold">{courseData.company}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {courseData.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-orange-100">
                {courseData.subtitle}
              </h2>
              <p className="text-lg font-medium mb-6 text-orange-100">
                {courseData.tagline}
              </p>
              
              <p className="text-lg mb-8 text-orange-50 leading-relaxed">
                {courseData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Calendar className="w-5 h-5 mr-2" />
                  Enroll Now - {courseData.overview.nextBatch}
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
                  <Download className="w-5 h-5 mr-2" />
                  Download Brochure
                </Button>
              </div>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{courseData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{courseData.contact.phone}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-6 bg-white/95 backdrop-blur">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Course Overview</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{courseData.stats.duration}</div>
                    <div className="text-sm text-gray-600">Weeks Program</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{courseData.stats.modules}</div>
                    <div className="text-sm text-gray-600">Core Modules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{courseData.stats.projects}</div>
                    <div className="text-sm text-gray-600">Hands-on Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{courseData.stats.placement}</div>
                    <div className="text-sm text-gray-600">Placement Support</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Format:</span>
                    <span className="font-medium">{courseData.overview.format}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Level:</span>
                    <span className="font-medium">{courseData.overview.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Certificate:</span>
                    <span className="font-medium">{courseData.overview.certificate}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose LogiqGen's AI Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience cutting-edge AI education with personalized learning technology and industry expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseData.keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
                  <div className="w-12 h-12 mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-orange-600" />
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
      </div>

      {/* Curriculum Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master AI and Machine Learning through our structured, hands-on approach covering everything from Python basics to advanced Generative AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Module Navigation */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Course Modules</h3>
                <div className="space-y-2">
                  {courseData.curriculum.map((module, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveModule(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeModule === index 
                          ? 'bg-orange-100 text-orange-800 border border-orange-200' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium text-sm">{module.module}</div>
                      <div className="text-xs text-gray-500">{module.duration}</div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            {/* Module Content */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {courseData.curriculum[activeModule].module}
                  </h3>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {courseData.curriculum[activeModule].duration}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {courseData.curriculum[activeModule].topics.map((topic, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* About LogiqGen Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                About LogiqGen Private Limited
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {courseData.aboutCompany}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">AI BUDDY</div>
                  <div className="text-sm text-gray-600">Flagship Product</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">LLM Expert</div>
                  <div className="text-sm text-gray-600">Specialization</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
                alt="AI Technology"
                width="600"
                height="320"
                loading="eager"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Join LogiqGen's comprehensive AI and Machine Learning program. Next batch starts {courseData.overview.nextBatch}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Enroll Now - Limited Seats
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              Call: {courseData.contact.phone}
            </Button>
          </div>
          <div className="mt-8 text-orange-100">
            <p>Questions? Email us at {courseData.contact.email}</p>
          </div>
        </div>
      </div>
      <RecommendedCourses currentCourseSlug="ai-machine-learning" limit={4} title="Related Courses" />
      <ContactForm />
    </div>
  );
};

export default AIMLCourseDetailsPage;