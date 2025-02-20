
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin } from "lucide-react";
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

  // Navigation items configuration
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Social links configuration - Update these URLs
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-cream">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-soil/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex gap-4">
            {navItems.map((section) => (
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

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-cream transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Section containers */}
        <div id="hero" className="bg-gradient-to-b from-earth/50 to-soil/70">
          <Hero />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cream opacity-50" />
          </div>
        </div>
        <div id="about" className="bg-gradient-to-b from-soil/70 via-soil/80 to-earth/50">
          <About />
        </div>
        <div id="skills" className="bg-gradient-to-b from-soil/70 to-earth/50">
          <Skills />
        </div>
        <div id="projects" className="bg-gradient-to-b from-earth/50 to-soil/70">
          <Projects />
        </div>
        <div id="contact" className="bg-gradient-to-b from-soil/70 to-earth/50">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
