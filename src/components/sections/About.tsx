
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const About = () => {
  // Add your social links here
  // To add more social links:
  // 1. Import the icon from lucide-react
  // 2. Add a new object to the socialLinks array with icon, label, and href
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/yourusername", // Replace with your GitHub URL
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn URL
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Text Content and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6 text-cream/90"
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

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
