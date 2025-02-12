
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

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

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-gradient-to-b from-cream to-clay/20">
        <Hero />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-soil opacity-50" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-clay/20 via-sage/10 to-cream">
        <About />
      </div>
      <div className="bg-gradient-to-b from-cream to-clay/20">
        <Projects />
      </div>
      <div className="bg-gradient-to-b from-clay/20 to-sage/10">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
