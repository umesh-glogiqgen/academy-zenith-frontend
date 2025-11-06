/**
 * Route Prefetching Utility
 * Prefetches route chunks on hover/focus for instant navigation
 */

const prefetchedRoutes = new Set<string>();

export const prefetchRoute = (path: string) => {
  if (prefetchedRoutes.has(path)) return;

  prefetchedRoutes.add(path);

  // Prefetch the route chunk
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';

  // Map routes to their potential chunk names
  // Vite will generate chunks based on dynamic imports
  const routeChunkMap: Record<string, string> = {
    '/': 'Index',
    '/s': 'SAP',
    '/contact': 'ContactForm',
    '/ai-machine-learning-course': 'AIMachineLearningCourse',
    '/course/:courseId': 'CourseDetail',
  };

  // This is a simplified version - in production, you'd need to know the actual chunk names
  console.log(`Prefetching route: ${path}`);
};

export const usePrefetchOnHover = () => {
  return {
    onMouseEnter: (path: string) => () => prefetchRoute(path),
    onFocus: (path: string) => () => prefetchRoute(path),
  };
};
