
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
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

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-dark-gray">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-earth border-b border-soil/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center gap-4">
          {navItems.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className="text-dark-gray hover:text-black hover:bg-white/10"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </nav>

      <div className="pt-16">
        <div id="hero" className="bg-earth">
          <Hero />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-dark-gray opacity-50" />
          </div>
        </div>
        <div id="about" className="bg-soil">
          <About />
        </div>
        <div id="skills" className="bg-earth">
          <Skills />
        </div>
        <div id="projects" className="bg-clay">
          <Projects />
        </div>
        <div id="contact" className="bg-soil">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
