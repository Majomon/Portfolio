import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ImgPerfil from "../../assets/perfil.webp";

const Home = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-[#0b1120] transition-colors duration-500"
    >
      {/* Fondo Decorativo Premium */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12 py-12">
        {/* Presentación */}
        <motion.div
          className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Mauricio <span className="text-yellow-400">Monzón</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
              Soy
            </span>
            <TypeAnimation
              sequence={[
                "AI ENGINEER",
                2000,
                "FULL STACK DEVELOPER",
                2000,
                "VIBE CODER",
                2000,
                "BACKEND DEVELOPER",
                2000,
                "FRONTEND DEVELOPER",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-xl sm:text-2xl md:text-3xl text-yellow-500 dark:text-yellow-400 font-extrabold uppercase"
            />
          </div>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transformo ideas en soluciones digitales sofisticadas. Especializado
            en el desarrollo de{" "}
            <span className="text-slate-900 dark:text-white font-bold">
              Aplicaciones Full Stack
            </span>
            , Agentes de IA e integraciones escalables que impulsan el valor de
            tu negocio.
          </motion.p>

          {/* Acciones */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="https://wa.me/5491138612819?text=Hola%20Mauri,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-4 sm:gap-8 text-lg sm:text-xl px-6 sm:px-8 py-4"
            >
              Contáctame
              <svg
                xmlns="http://www.w3.org/2000/svg"
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
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </a>

            <a
              href="https://drive.google.com/file/d/1ulcI2v-tP3lr3dkmE4lZVrTs5zG7nevb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg sm:text-xl px-6 sm:px-8 py-4"
            >
              Descargar CV
            </a>
          </motion.div>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start gap-4">
            {[
              {
                href: "https://www.linkedin.com/in/mauricio-monzon/",
                icon: "brand-linkedin",
              },
              {
                href: "https://www.youtube.com/@MauriCode",
                icon: "brand-youtube",
              },
              { href: "https://github.com/Majomon", icon: "brand-github" },
            ].map(({ href, icon }) => (
              <motion.a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-yellow-400 dark:hover:border-yellow-400 transition-colors bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`icon icon-tabler icon-tabler-${icon} text-slate-700 dark:text-slate-300`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {icon === "brand-linkedin" && (
                    <>
                      <path d="M8 11v5" />
                      <path d="M8 8v.01" />
                      <path d="M12 16v-5" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </>
                  )}
                  {icon === "brand-youtube" && (
                    <>
                      <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                      <path d="M10 9l5 3l-5 3z" />
                    </>
                  )}
                  {icon === "brand-github" && (
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  )}
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Imagen con animación moderna */}
        <motion.div
          className="hidden md:flex w-full md:w-5/12 justify-center p-4 lg:p-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400 rounded-[3rem] blur-2xl opacity-20 dark:opacity-10 group-hover:opacity-30 transition-opacity" />
            <motion.img
              initial={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              animate={{
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 md:w-[400px] aspect-square object-cover border-8 border-white dark:border-slate-800 shadow-2xl z-10"
              src={ImgPerfil}
              alt="Mauricio Monzón"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
