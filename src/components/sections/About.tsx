
import { motion } from "framer-motion";

const About = () => {
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
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-8">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-6 text-cream/90">
                <p className="text-lg leading-relaxed">
                  Hello! I'm a junior software developer passionate about creating meaningful digital experiences. With a background in both technology and mindfulness, I bring a unique perspective to every project I undertake.
                </p>
                <p className="text-lg leading-relaxed">
                  My journey into software development began with a curiosity about how technology can enhance our daily lives. This curiosity, combined with my love for problem-solving, led me to pursue a career in web development.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring nature trails, practicing meditation, or learning about sustainable technology practices.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-3xl font-bold text-cream mb-8">
              Skills
            </h3>
            <div className="grid gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/10"
                >
                  <h4 className="font-playfair text-2xl font-bold text-cream mb-4">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-cream/80 font-inter"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
