import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer({ lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 text-center">
      <motion.footer
        className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/earieta21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/earrieta21"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            {lang === "en"
              ? `© ${year} Eric Arrieta. All rights reserved.`
              : `© ${year} Eric Arrieta. Todos los derechos reservados.`}
          </p>
        </div>
      </motion.footer>
    </footer>
  );
}

export default Footer;
