import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ImgPerfil from "../../assets/perfil.webp";

const Home = () => {
  return (
    <div className="Home">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-32 pt-10 pb-5">
        {/* Presentación */}
        <motion.div
          className="w-11/12 md:w-5/12 flex flex-col text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mi nombre es{" "}
            <span className="text-5xl md:text-6xl font-extrabold text-yellow-400 dark:text-yellow-400 mb-4">
              Mauricio Monzón
            </span>
          </h1>

          <div className="py-6">
            <span className="text-3xl font-semibold">Soy </span>
            <TypeAnimation
              sequence={[
                "FRONTEND DEVELOPER",
                2000,
                "BACKEND DEVELOPER",
                2000,
                "MOBILE DEVELOPER",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-3xl text-yellow-400 dark:text-yellow-400 font-bold"
            />
          </div>

          <h4 className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Apasionado por crear aplicaciones web y móviles con experiencia en
            React, Node.js y React Native.
          </h4>

          {/* Redes sociales */}
          <div className="w-full mt-6 mb-10 flex justify-center md:justify-start gap-6">
            {[
              {
                href: "https://www.linkedin.com/in/mauricio-monzon/",
                icon: "brand-linkedin",
              },
              {
                href: "https://www.youtube.com/@MauriCode",
                icon: "brand-youtube",
              },
              {
                href: "https://github.com/Majomon",
                icon: "brand-github",
              },
            ].map(({ href, icon }) => (
              <motion.a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="border border-slate-300 dark:border-slate-700/90 rounded-lg p-2 transition-all hover:border-yellow-400 dark:hover:border-yellow-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`icon icon-tabler icon-tabler-${icon}`}
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  stroke="currentColor"
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

          {/* Botones */}
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-lg px-6 py-2"
            >
              <Link to="Contact" smooth spy duration={500}>
                Contactame
              </Link>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://docs.google.com/document/d/1krXgTHrrNiTfHHBL24EE8hfHQ5xC-DrTQ-uKYok1cFk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-lg px-6 py-2 transition-all"
            >
              Ver CV
            </motion.a>
          </div>
        </motion.div>

        {/* Imagen con animación orgánica */}
        <motion.div
          className="hidden w-8/12 md:w-5/12 mt-10 md:mt-0 sm:flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            initial={{
              borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            }}
            animate={{
              borderRadius: [
                "60% 40% 30% 70%/60% 30% 70% 40%",
                "30% 60% 70% 40%/50% 60% 30% 60%",
                "60% 40% 30% 70%/60% 30% 70% 40%",
              ],
              x: [10, 50, 10],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-[350px] md:w-[450px] h-80 border-8 border-yellow-400 shadow-xl object-cover"
            src={ImgPerfil}
            alt="Mauricio Monzón"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
