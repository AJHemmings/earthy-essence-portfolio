
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "RESTful APIs", "PostgreSQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Docker", "Figma"],
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-sage/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-cream p-6 rounded-lg shadow-md"
            >
              <h3 className="font-playfair text-2xl font-bold text-earth mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-soil/80 font-inter"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
