import { motion } from "framer-motion";

// Importa tus imágenes igual que antes
import Bootstrap from "../../assets/skills/Bootstrap.png";
import CSS from "../../assets/skills/CSS.png";
import Express from "../../assets/skills/Express.png";
import Firebase from "../../assets/skills/Firebase.png";
import Git from "../../assets/skills/GIT.png";
import HTML from "../../assets/skills/HTML.png";
import Js from "../../assets/skills/JS.png";
import MongoDb from "../../assets/skills/Mongo.png";
import Nestjs from "../../assets/skills/Nestjs.png";
import Nextjs from "../../assets/skills/Nextjs.png";
import Node from "../../assets/skills/NodeJs.png";
import Postgress from "../../assets/skills/Postgress.png";
import ReactLogo from "../../assets/skills/React.png";
import ReactNative from "../../assets/skills/ReactNative.png";
import Redux from "../../assets/skills/Redux.png";
import Sass from "../../assets/skills/Sass.png";
import Sequelize from "../../assets/skills/Sequelize.png";
import Tailwind from "../../assets/skills/Tailwind.png";
import Zustand from "../../assets/skills/Zustand.png";

const techsIcons = [
  { name: "Bootstrap", img: Bootstrap, url: "https://getbootstrap.com/" },
  {
    name: "CSS",
    img: CSS,
    url: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  { name: "Express", img: Express, url: "https://expressjs.com" },
  {
    name: "Firebase",
    img: Firebase,
    url: "https://firebase.google.com/?hl=es",
  },
  { name: "Git", img: Git, url: "https://git-scm.com/" },
  {
    name: "HTML",
    img: HTML,
    url: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    name: "JavaScript",
    img: Js,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  { name: "MongoDB", img: MongoDb, url: "https://www.mongodb.com/es" },
  { name: "NestJS", img: Nestjs, url: "https://nestjs.com" },
  { name: "Next.js", img: Nextjs, url: "https://nextjs.org/" },
  { name: "Node.js", img: Node, url: "https://nodejs.org/es" },
  { name: "PostgreSQL", img: Postgress, url: "https://www.postgresql.org/" },
  { name: "React", img: ReactLogo, url: "https://es.react.dev/" },
  { name: "React Native", img: ReactNative, url: "https://reactnative.dev/" },
  { name: "Redux", img: Redux, url: "https://redux.js.org/" },
  { name: "Sass", img: Sass, url: "https://sass-lang.com/" },
  { name: "Sequelize", img: Sequelize, url: "https://sequelize.org/" },
  { name: "Tailwind", img: Tailwind, url: "https://tailwindcss.com/" },
  { name: "Zustand", img: Zustand, url: "https://zustand-demo.pmnd.rs/" },
];

const Skills = () => {
  return (
    <section className="Skills relative py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-yellow-500 border-b-4 border-yellow-400 inline-block pb-2"
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300"
        >
          Estas son las tecnologías que utilizo en mis proyectos
        </motion.p>
      </div>

      <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {techsIcons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className="group relative flex flex-col items-center cursor-pointer"
          >
            <div className="w-28 h-28 bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-yellow-400/40 transition-all duration-300">
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={icon.img}
                  alt={icon.name}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
            <h4 className="mt-3 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 group-hover:text-yellow-400 transition-colors">
              {icon.name}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* Decoración sutil */}
      <div className="absolute top-10 left-1/3 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Skills;
