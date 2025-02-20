import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  secondaryImage: string;
  tags: string[];
  deploymentUrl?: string;
  repositoryUrl?: string;
  longDescription: string;
  inDevelopment: string[];
  plannedFeatures: string[];
  currentState: string;
}

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      const containerScrollLeft = container.scrollLeft;
      const containerScrollWidth = container.scrollWidth;
      const containerClientWidth = container.clientWidth;
      const isAtEnd = containerScrollLeft + containerClientWidth >= containerScrollWidth;
      const isAtStart = containerScrollLeft === 0;

      if (e.deltaY > 0 && !isAtEnd) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
      else if (e.deltaY < 0 && !isAtStart) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', onWheel);
    };
  }, []);

  const projects: Project[] = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      image: "/placeholder.svg",
      secondaryImage: "/placeholder.svg",
      tags: ["React", "Node.js", "PostgreSQL"],
      deploymentUrl: "https://example.com/project1",
      repositoryUrl: "https://github.com/username/project1",
      longDescription: "A comprehensive web application that demonstrates modern full-stack development practices. Built with scalability and user experience in mind.",
      inDevelopment: [
        "Real-time notification system",
        "Advanced search functionality",
        "User profile customization"
      ],
      plannedFeatures: [
        "OAuth integration",
        "Mobile application",
        "API marketplace"
      ],
      currentState: "Beta - Currently testing with a small group of users"
    },
    {
      title: "Project Two",
      description: "Mobile-first responsive design with modern animations",
      image: "/placeholder.svg",
      secondaryImage: "/placeholder.svg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      deploymentUrl: "https://example.com/project2",
      repositoryUrl: "https://github.com/username/project2",
      longDescription: "An innovative front-end project showcasing advanced animation techniques and responsive design principles.",
      inDevelopment: [
        "Dark mode implementation",
        "Accessibility improvements",
        "Performance optimizations"
      ],
      plannedFeatures: [
        "Customizable themes",
        "Offline support",
        "Interactive tutorials"
      ],
      currentState: "Production - Actively used by customers"
    },
    {
      title: "Project Three",
      description: "Real-time data visualization dashboard",
      image: "/placeholder.svg",
      secondaryImage: "/placeholder.svg",
      tags: ["TypeScript", "D3.js", "Firebase"],
      deploymentUrl: "https://example.com/project3",
      repositoryUrl: "https://github.com/username/project3",
      longDescription: "A sophisticated dashboard that presents complex data in an intuitive and interactive way.",
      inDevelopment: [
        "Additional chart types",
        "Custom data filters",
        "Export functionality"
      ],
      plannedFeatures: [
        "AI-powered insights",
        "Team collaboration features",
        "Custom reporting"
      ],
      currentState: "Alpha - Early development phase"
    },
    {
      title: "Project Four",
      description: "AI-powered content management system",
      image: "/placeholder.svg",
      secondaryImage: "/placeholder.svg",
      tags: ["Next.js", "OpenAI", "MongoDB"],
      deploymentUrl: "https://example.com/project4",
      repositoryUrl: "https://github.com/username/project4",
      longDescription: "An innovative CMS that leverages artificial intelligence to help content creators optimize their work.",
      inDevelopment: [
        "Advanced AI editing features",
        "Content optimization suggestions",
        "SEO automation"
      ],
      plannedFeatures: [
        "Multi-language support",
        "Content scheduling",
        "Analytics dashboard"
      ],
      currentState: "Development - Building core features"
    }
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        <div className="bg-[#FEC6A1] rounded-2xl border border-[#8E9196]/20 p-8">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-8 p-8 min-w-max">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-dark-gray/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md w-[400px] flex-shrink-0 border border-white/10 cursor-pointer hover:border-sage/50 transition-colors"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold text-cream mb-2">
                      {project.title}
                    </h3>
                    <p className="text-cream/80 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-sage/20 text-cream/90 px-3 py-1 rounded-full text-sm border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-dark-gray/95 border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair font-bold text-cream">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="rounded-lg w-full aspect-video object-cover"
            />
            <img
              src={selectedProject?.secondaryImage}
              alt={`${selectedProject?.title} secondary view`}
              className="rounded-lg w-full aspect-video object-cover"
            />
          </div>

          <div className="space-y-6 mt-6">
            <p className="text-cream/90 leading-relaxed">
              {selectedProject?.longDescription}
            </p>

            <div className="flex gap-4">
              {selectedProject?.deploymentUrl && (
                <Button
                  variant="outline"
                  className="border-white/10 hover:border-sage"
                  onClick={() => window.open(selectedProject.deploymentUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Deployment
                </Button>
              )}
              {selectedProject?.repositoryUrl && (
                <Button
                  variant="outline"
                  className="border-white/10 hover:border-sage"
                  onClick={() => window.open(selectedProject.repositoryUrl, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Repository
                </Button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold text-cream mb-2">Current State</h4>
                <p className="text-cream/80">{selectedProject?.currentState}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-cream mb-2">Features in Development</h4>
                <ul className="list-disc list-inside text-cream/80 space-y-1">
                  {selectedProject?.inDevelopment.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-cream mb-2">Planned Features</h4>
                <ul className="list-disc list-inside text-cream/80 space-y-1">
                  {selectedProject?.plannedFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
