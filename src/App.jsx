import { useState } from "react";
import Services from "./services";
import Contact from "./contact";
import Footer from "./footer";
import { motion } from "framer-motion";

function App() {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  const content = {
    en: {
      title: "Web development with purpose.",
      subtitle: "I build fast, responsive, and effective websites.",
      button: "Let’s work together",
    },
    es: {
      title: "Desarrollo web con propósito.",
      subtitle: "Creo sitios rápidos, responsivos y efectivos.",
      button: "Trabajemos juntos",
    },
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex gap-4 flex-wrap justify-center">
              <button
                className={`px-4 py-2 rounded-full border shadow ${
                  lang === "en" ? "bg-black text-white" : "bg-white text-black"
                } transition`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                className={`px-4 py-2 rounded-full border shadow ${
                  lang === "es" ? "bg-black text-white" : "bg-white text-black"
                } transition`}
                onClick={() => setLang("es")}
              >
                ES
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-2 rounded-full border shadow transition hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {darkMode
                  ? lang === "en"
                    ? "Light Mode"
                    : "Modo claro"
                  : lang === "en"
                  ? "Dark Mode"
                  : "Modo oscuro"}
              </button>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              {content[lang].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8">
              {content[lang].subtitle}
            </p>

            <a
              href="#contact"
              className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              {content[lang].button}
            </a>
          </motion.div>
        </section>

        {/* About Me */}
        <section className="px-6 py-20 bg-white dark:bg-gray-900 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              {lang === "en" ? "About Me" : "Sobre mí"}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {lang === "en"
                ? "I’m Eric Arrieta, a web developer focused on building fast, modern, and functional websites. I love turning ideas into stylish, purpose-driven digital solutions. Got a project in mind? Let’s bring it to life."
                : "Soy Eric Arrieta, desarrollador web enfocado en crear sitios modernos, rápidos y funcionales. Me apasiona transformar ideas en soluciones digitales con estilo y propósito. ¿Tienes un proyecto en mente? Yo lo hago realidad."}
            </p>
          </motion.div>
        </section>

        {/* Other Sections */}
        <Services lang={lang} />
        <Contact lang={lang} />
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
