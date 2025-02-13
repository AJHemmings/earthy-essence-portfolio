
import { motion } from "framer-motion";

const Skills = () => {
  // Define skill categories with images
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
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
    <section className="min-h-screen py-20 px-4 bg-sage/10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-cream p-6 rounded-lg shadow-md"
            >
              <h3 className="font-playfair text-2xl font-bold text-earth mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-soil/80 font-inter text-sm">
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
