import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

/**
 * Persistent Layout Component
 * Navigation and Footer remain mounted across route changes for instant transitions
 */
export const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
