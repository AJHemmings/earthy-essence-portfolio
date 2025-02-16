
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Socials = () => {
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
    <section className="py-16 px-4 bg-gradient-to-b from-dark-gray to-dark-charcoal">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-cream/80 hover:text-cream transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <social.icon className="w-8 h-8" />
              <span className="text-sm font-medium">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
