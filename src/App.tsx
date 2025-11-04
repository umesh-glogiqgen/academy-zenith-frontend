import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AIMachineLearningCourse = lazy(() => import("./pages/AIMachineLearningCourse"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const ContactForm = lazy(() => import("./components/ContactForm").then(module => ({ default: module.ContactForm })));

const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0066CC]"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/ai-machine-learning-course" element={<AIMachineLearningCourse/>}/>
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
