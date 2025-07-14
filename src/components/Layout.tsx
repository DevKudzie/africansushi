"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import LoadingBar from "@/components/LoadingBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <LoadingBar />
      <Navigation />
      <PageTransition>
        <main className="flex-1"> {/* Remove top padding to allow hero slider to start at top */}
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
} 