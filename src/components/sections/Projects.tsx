
import { motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "Project Two",
      description: "Mobile-first responsive design with modern animations",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Project Three",
      description: "Real-time data visualization dashboard",
      image: "/placeholder.svg",
      tags: ["TypeScript", "D3.js", "Firebase"],
    },
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
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

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
                className="bg-cream/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md w-[400px] flex-shrink-0"
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-earth mb-2">
                    {project.title}
                  </h3>
                  <p className="text-soil/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-sage/20 text-soil px-3 py-1 rounded-full text-sm"
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
    </section>
  );
};

export default Projects;
