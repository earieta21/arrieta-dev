import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact({ lang }) {
  return (
    <section className="bg-white dark:bg-gray-900 text-center text-gray-800 dark:text-gray-100">
      <motion.section
        id="contact"
        className="px-6 py-20 bg-white dark:bg-gray-900 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">
          {lang === "en" ? "Let's Connect" : "Conectemos"}
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          {lang === "en"
            ? "Whether you have a project in mind or just want to say hi, I'm always open to new opportunities."
            : "Ya sea que tengas un proyecto en mente o solo quieras saludar, siempre estoy abierto a nuevas oportunidades."}
        </p>

        <a
          href="https://wa.me/+13109770612" // <-- cámbialo por tu número real
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          <FaWhatsapp className="text-xl" />
          {lang === "en"
            ? "Message me on WhatsApp"
            : "Envíame un mensaje por WhatsApp"}
        </a>
      </motion.section>
    </section>
  );
}

export default Contact;
