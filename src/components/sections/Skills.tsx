
import { motion } from "framer-motion";

const Skills = () => {
  // Add your skill categories here
  // Each category should have a title and an array of skills
  // Each skill should have a name and an image path
  // Image size should be 48x48px (w-12 h-12) for optimal display
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        // Replace image paths with your own skill icons (48x48px recommended)
        { name: "React", image: "/placeholder.svg" },
        { name: "TypeScript", image: "/placeholder.svg" },
        { name: "Tailwind CSS", image: "/placeholder.svg" },
        { name: "HTML5/CSS3", image: "/placeholder.svg" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", image: "/placeholder.svg" },
        { name: "Express", image: "/placeholder.svg" },
        { name: "RESTful APIs", image: "/placeholder.svg" },
        { name: "PostgreSQL", image: "/placeholder.svg" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", image: "/placeholder.svg" },
        { name: "VS Code", image: "/placeholder.svg" },
        { name: "Docker", image: "/placeholder.svg" },
        { name: "Figma", image: "/placeholder.svg" },
      ],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-dark-charcoal">
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

        {/* Skills Grid - Add new categories above in skillCategories array */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark-gray/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/10 hover:border-sage/50 transition-all"
            >
              <h3 className="font-playfair text-2xl font-bold text-cream mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center space-y-2"
                  >
                    {/* Skill Icon - Replace image prop with your icon path */}
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-dark-charcoal/50 p-2 border border-white/5">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-cream/80 font-inter text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
