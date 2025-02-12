
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-clay/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-soil"
          >
            <p className="text-lg leading-relaxed">
              Hello! I'm a junior software developer passionate about creating meaningful digital experiences. With a background in both technology and mindfulness, I bring a unique perspective to every project I undertake.
            </p>
            <p className="text-lg leading-relaxed">
              My journey into software development began with a curiosity about how technology can enhance our daily lives. This curiosity, combined with my love for problem-solving, led me to pursue a career in web development.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring nature trails, practicing meditation, or learning about sustainable technology practices.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
