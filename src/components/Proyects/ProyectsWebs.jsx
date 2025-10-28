import { motion } from "framer-motion";
import { projectsWebs } from "../../constants/ProyectsWeb.js";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ProyectsWebs = () => {
  return (
    <section className="Proyects py-16">
      <div className="sm:w-10/12 sm:mx-auto">
        {/* Sección de título con animación */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="relative inline-block text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 tracking-tight">
            Proyectos Web
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Algunos de mis trabajos recientes desarrollados con tecnologías
            modernas y enfoque en experiencia de usuario.
          </motion.p>
        </motion.div>

        {/* Grilla de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsWebs.map((project, index) => (
            <motion.figure
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative group overflow-hidden rounded-2xl border border-slate-600 dark:border-yellow-400/50 shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
            >
              {/* Imagen */}
              <img
                src={project.image}
                alt={`Vista previa del proyecto ${project.name}`}
                className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:blur-sm group-hover:brightness-75"
              />

              {/* Overlay con info */}
              <figcaption className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-semibold text-white mb-4 border-l-8 border-yellow-400 pl-3"
                >
                  {project.name}
                </motion.h3>

                <motion.a
                  href={project.url_deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${project.name}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="flex items-center gap-2 bg-yellow-400 text-black font-medium px-5 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
                >
                  Ver proyecto
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </motion.a>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProyectsWebs;
