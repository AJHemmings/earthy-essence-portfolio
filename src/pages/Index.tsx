
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-dark-charcoal text-cream">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-charcoal/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center gap-4">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" },
          ].map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className="text-cream/80 hover:text-cream hover:bg-white/10"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-16"> {/* Add padding to account for sticky nav */}
        <div id="hero" className="bg-gradient-to-b from-dark-charcoal to-dark-gray">
          <Hero />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cream opacity-50" />
          </div>
        </div>
        <div id="about" className="bg-gradient-to-b from-dark-gray via-dark-gray to-dark-charcoal">
          <About />
        </div>
        <div id="projects" className="bg-gradient-to-b from-dark-charcoal to-dark-gray">
          <Projects />
        </div>
        <div id="contact" className="bg-gradient-to-b from-dark-gray to-dark-charcoal">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
