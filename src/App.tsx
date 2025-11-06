import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Direct imports — no lazy, no Suspense
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIMachineLearningCourse from "./pages/AIMachineLearningCourse";
import CourseDetail from "./pages/CourseDetail";
import ComingSoon from "./pages/ComingSoon";
import SAPSecurityS4HANAFioriCourse from "./pages/SAP";
import { ContactForm } from "./components/ContactForm";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

// Scroll to top component - resets scroll on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]); // Run when pathname or hash changes

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Layout wrapper keeps Navigation and Footer mounted across route changes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/s" element={<SAPSecurityS4HANAFioriCourse/>} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/ai-machine-learning-course" element={<AIMachineLearningCourse/>}/>
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
