import { useEffect, useRef, useState, ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  forceRender?: boolean;
}

export const LazySection = ({ children, className = '', threshold = 0, forceRender = false }: LazySectionProps) => {
  const [isVisible, setIsVisible] = useState(forceRender);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If forceRender is true, make it visible immediately
    if (forceRender) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '600px', // Start loading 600px before visible - very aggressive preloading
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold, forceRender]);

  return (
    <div ref={sectionRef} className={className}>
      {isVisible ? (
        <div className="animate-fade-in">{children}</div>
      ) : (
        <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 animate-pulse rounded-lg" style={{ minHeight: '400px' }}>
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        </div>
      )}
    </div>
  );
};
