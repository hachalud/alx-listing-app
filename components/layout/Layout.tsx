import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

// Explicitly define the props interface to include children
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;