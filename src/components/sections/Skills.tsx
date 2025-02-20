
import { motion } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";

const Skills = () => {
  const skills = [
    { name: "React", image: "/placeholder.svg" },
    { name: "TypeScript", image: "/placeholder.svg" },
    { name: "Tailwind CSS", image: "/placeholder.svg" },
    { name: "HTML5/CSS3", image: "/placeholder.svg" },
    { name: "Node.js", image: "/placeholder.svg" },
    { name: "Express", image: "/placeholder.svg" },
    { name: "PostgreSQL", image: "/placeholder.svg" },
    { name: "Git", image: "/placeholder.svg" },
    { name: "Docker", image: "/placeholder.svg" },
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-soil/70 to-earth/50">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header - Background Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-[#FEC6A1] rounded-2xl border border-[#8E9196]/20 p-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        {/* Skills Grid - Background Card */}
        <motion.div 
          className="bg-[#FEC6A1] rounded-2xl border border-[#8E9196]/20 p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-soil/50 p-2 border border-white/5 hover:border-sage/50 transition-colors">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-black font-inter text-sm text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
