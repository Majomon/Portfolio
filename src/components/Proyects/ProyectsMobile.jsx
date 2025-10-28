import { motion } from "framer-motion";
import { projectsMobile } from "../../constants/ProyectsMobile.js";

const ProyectsMobile = () => {
  return (
    <section className="Proyects py-16 lg:w-10/12 lg:mx-auto">
      {/* Título animado */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center"
      >
        <h2 className="text-center text-yellow-400 dark:text-yellow-400 text-5xl font-bold mb-2">
          Proyectos Mobile
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mb-10 rounded-full" />
      </motion.div>

      {/* Grid de proyectos */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsMobile.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group flex flex-col justify-center items-center rounded-xl overflow-hidden border-2 border-slate-300 dark:border-yellow-400 hover:bg-slate-900"
          >
            {/* Imagen */}
            <img
              className="opacity-100 group-hover:opacity-10 w-full h-auto rounded-lg transition-opacity duration-500"
              src={project.image}
              alt={project.name}
            />

            {/* Texto sobre hover */}
            <motion.h2 className="absolute opacity-0 group-hover:opacity-100 text-white text-xl text-center px-4 transition-all duration-500 select-none">
              {project.name}
            </motion.h2>

            {/* Botón de deploy (solo si hay link) */}
            {project.url_deploy && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="absolute opacity-0 group-hover:opacity-100 right-0 bottom-0 m-4 hover:bg-white/70 stroke-white hover:stroke-black rounded-full p-1"
                type="button"
              >
                <a
                  href={project.url_deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-external-link"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </a>
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProyectsMobile;
