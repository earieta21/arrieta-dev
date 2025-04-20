import { motion } from "framer-motion";

function Services({ lang }) {
  const services = [
    {
      title: lang === "en" ? "Responsive Design" : "Diseño Responsivo",
      description:
        lang === "en"
          ? "Your site will look great on any device — mobile, tablet, or desktop."
          : "Tu sitio se verá increíble en cualquier dispositivo — móvil, tableta o escritorio.",
    },
    {
      title:
        lang === "en"
          ? "Performance Optimization"
          : "Optimización de rendimiento",
      description:
        lang === "en"
          ? "Fast load times and smooth interactions for a better user experience."
          : "Tiempos de carga rápidos y experiencias suaves para tus usuarios.",
    },
    {
      title: lang === "en" ? "SEO Friendly" : "SEO Optimizado",
      description:
        lang === "en"
          ? "Built with SEO best practices to help people find you online."
          : "Hecho con buenas prácticas de SEO para que te encuentren en Google.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center">
      <motion.section
        className="px-6 py-20 bg-gray-50 dark:bg-gray-900 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {lang === "en" ? "Services" : "Servicios"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </section>
  );
}

export default Services;
