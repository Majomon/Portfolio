import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

// Content
import ImgPerfil from "../../assets/imagenPerfil.jpeg";

const Home = () => {
  return (
    <div className="Home">
      {/* Presentacion */}
      <div className="w-11/12 md:w-5/12 flex flex-col text-center md:text-left pt-10 pb-5 px-6">
        <h1 className="text-4xl">Mi nombre es Mauricio Monzón</h1>
        <div className="py-6 flex flex-col">
          <span className="text-3xl">Soy </span>
          <TypeAnimation
            sequence={["FRONTEND DEVELOPER", 2000, "BACKEND DEVELOPER", 2000]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="text-3xl text-yellow-400 dark:text-yellow-400"
          />
        </div>
        <h4>
          Desarrollador Web Freelance ubicado en Buenos Aires,
          Argentina&#128205;
        </h4>

        {/* Social Media */}
        <div className="w-full h-14 mt-4 mb-10 mx-auto flex justify-center items-center">
          <ul className="w-full flex flex-row justify-between md:justify-start stroke-black dark:stroke-white">
            {/* Linkedin */}
            <li className=" md:ml-10">
              <a
                href="https://www.linkedin.com/in/mauricio-monzon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-linkedin scale-150"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </button>
              </a>
            </li>
            {/* Youtube */}
            <li className=" md:ml-10">
              <a
                href="https://www.youtube.com/@consollo6692"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-youtube"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                    <path d="M10 9l5 3l-5 3z" />
                  </svg>
                </button>
              </a>
            </li>
            {/* Github */}
            <li className=" md:ml-10">
              <a
                href="https://github.com/Majomon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-github"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
                </button>
              </a>
            </li>
            {/* Instagram */}
            <li className=" md:ml-10">
              <a
                href="https://www.instagram.com/maurimonzon_j/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-lg p-1 border border-slate-300 dark:border-slate-700/90 hover:stroke-spring-green-700 hover:border-spring-green-700 hover:dark:border-spring-green-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-instagram"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* Button Contact */}
        <div className="w-full flex justify-center md:justify-start">
          <button
            className="flex w-32 bg-yellow-400 hover:bg-yellow-600 rounded-lg p-2"
            type="button"
          >
            <Link
              to="Contact"
              className="w-full h-full"
              smooth={true}
              spy={true}
              duration={500}
            >
              <span>Contactame</span>
            </Link>
          </button>
        </div>
      </div>

      {/* Perfil Libreria Framer*/}
      <div className="w-5/12 hidden md:flex justify-center md:m-0 my-10">
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
          className="w-80 border-8 border-yellow-400"
          src={ImgPerfil}
          alt="Mauricio Monzón"
        />
      </div>
    </div>
  );
};

export default Home;
