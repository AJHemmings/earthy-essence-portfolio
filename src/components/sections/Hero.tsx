
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  // Use scroll progress to control background opacity
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 0]);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Fade Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        style={{ opacity: backgroundOpacity }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="/lovable-uploads/3bf00e87-3ffe-4cc3-b7a1-d188ac3a2f2e.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/80 to-dark-charcoal/70 -z-5" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-4 text-cream">
          John Doe
        </h1>
        <p className="font-inter text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto">
          Empathetic Junior Software Developer | Building with Purpose
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
