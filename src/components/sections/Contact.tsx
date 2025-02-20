
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      {/* Contact Card - Customize background color, border, and rounded corners here */}
      <div className="max-w-4xl mx-auto bg-[#FEC6A1] rounded-2xl border border-[#8E9196]/20 p-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
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
            <h3 className="font-playfair text-2xl font-bold text-black">
              Let's Connect
            </h3>
            <p className="text-black/80 leading-relaxed">
              I'm always open to new opportunities and collaborations. Whether you
              have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="space-y-4">
              <p className="text-black/90">
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:hello@example.com"
                  className="text-sage hover:text-sage/80"
                >
                  hello@example.com
                </a>
              </p>
              <p className="text-black/90">
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
              <label htmlFor="name" className="block text-black/90 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white/5 border border-black/10 rounded-lg focus:outline-none focus:border-sage text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black/90 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white/5 border border-black/10 rounded-lg focus:outline-none focus:border-sage text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black/90 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white/5 border border-black/10 rounded-lg focus:outline-none focus:border-sage text-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sage/80 hover:bg-sage text-black py-3 rounded-lg transition-colors"
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
