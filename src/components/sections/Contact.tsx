
import { motion } from "framer-motion";

const Contact = () => {
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
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-sage mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-playfair text-2xl font-bold text-earth">
              Let's Connect
            </h3>
            <p className="text-soil/80 leading-relaxed">
              I'm always open to new opportunities and collaborations. Whether you
              have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <p className="text-soil">
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-sage hover:underline"
                >
                  hello@example.com
                </a>
              </p>
              <p className="text-soil">
                <span className="font-bold">Location:</span> San Francisco, CA
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-soil mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-soil mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-soil mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-sage/30 rounded-lg focus:outline-none focus:border-sage"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sage text-white py-3 rounded-lg hover:bg-sage/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
