import { motion } from "framer-motion";
import { projectsData } from "../../constants/ProjectsData";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="py-24 bg-white dark:bg-[#0b1120] transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Proyectos <span className="text-yellow-400">Destacados</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="section-subtitle"
          >
            Una selección de mis trabajos más recientes, abarcando desde Agentes
            de IA hasta aplicaciones móviles y web de alto rendimiento.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden flex flex-col h-full"
            >
              {/* Imagen del Proyecto */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Badge de Tipo */}
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest">
                  {project.type}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Acciones */}
                <div className="flex gap-4 mt-auto">
                  {project.whatsapp ? (
                    <a
                      href={project.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2 w-full text-center py-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-brand-whatsapp"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                      Probar Agente
                    </a>
                  ) : (
                    <>
                      {project.url_deploy && (
                        <a
                          href={project.url_deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 text-center text-xl"
                        >
                          Ver
                        </a>
                      )}
                      {project.url_github && (
                        <a
                          href={project.url_github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex-1 text-center text-sm"
                        >
                          Repo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
