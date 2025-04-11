import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import IntegrationSection from "@/components/home/IntegrationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DemoRequestSection from "@/components/home/DemoRequestSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-sans text-foreground bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <IntegrationSection />
      <TestimonialsSection />
      <DemoRequestSection />
      <Footer />
    </div>
  );
}
