
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sage/10 to-cream/50 -z-10" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 text-earth">
          John Doe
        </h1>
        <p className="font-inter text-xl md:text-2xl text-soil/80 max-w-2xl mx-auto">
          Empathetic Junior Software Developer | Building with Purpose
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
