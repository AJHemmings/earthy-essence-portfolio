import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

const Skills = () => {
  // Add your skills here
  // Each skill should have a name and an image path
  // Images should be 48x48px for optimal display
  const skills = [
    // Frontend Skills
    { name: "React", image: "/placeholder.svg" },
    { name: "TypeScript", image: "/placeholder.svg" },
    { name: "Tailwind CSS", image: "/placeholder.svg" },
    { name: "HTML5/CSS3", image: "/placeholder.svg" },
    // Backend Skills
    { name: "Node.js", image: "/placeholder.svg" },
    { name: "Express", image: "/placeholder.svg" },
    { name: "PostgreSQL", image: "/placeholder.svg" },
    // Tools
    { name: "Git", image: "/placeholder.svg" },
    { name: "Docker", image: "/placeholder.svg" },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-dark-charcoal relative overflow-hidden">
      {/* Animated Background - Customize colors and animation in /components/AnimatedBackground.tsx */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        {/* Skills Grid - Add new skills in the skills array above */}
        <motion.div 
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Skill Icon - Replace image prop with your icon path (48x48px) */}
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-gray/50 p-2 border border-white/5 hover:border-sage/50 transition-colors">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-cream/80 font-inter text-sm text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
