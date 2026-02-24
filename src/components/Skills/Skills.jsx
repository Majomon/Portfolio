import { motion } from "framer-motion";

// Importa tus imágenes igual que antes
import CSS from "../../assets/skills/CSS.png";
import Express from "../../assets/skills/Express.png";
import Firebase from "../../assets/skills/Firebase.png";
import Git from "../../assets/skills/GIT.png";
import Js from "../../assets/skills/JS.png";
import MongoDb from "../../assets/skills/Mongo.png";
import Nestjs from "../../assets/skills/Nestjs.png";
import Nextjs from "../../assets/skills/Nextjs.png";
import Node from "../../assets/skills/NodeJs.png";
import Postgress from "../../assets/skills/Postgress.png";
import ReactLogo from "../../assets/skills/React.png";
import ReactNative from "../../assets/skills/ReactNative.png";
import Redux from "../../assets/skills/Redux.png";
import Sequelize from "../../assets/skills/Sequelize.png";
import Tailwind from "../../assets/skills/Tailwind.png";
import Zustand from "../../assets/skills/Zustand.png";

const techsIcons = [
  {
    name: "Agentes de IA",
    img: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    url: "https://openai.com/",
  },
  {
    name: "Chatwoot",
    img: "https://play-lh.googleusercontent.com/cLKXwyFtppidr-UrR6xbTkmMC3A345PYifJbttxHTRpPGdLd6rkFtN7CpsJfLmDJIA8=w240-h480-rw",
    url: "https://www.chatwoot.com/",
  },
  {
    name: "Cloudflare",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png",
    url: "https://www.cloudflare.com/",
  },
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
    name: "JavaScript",
    img: Js,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  { name: "MongoDB", img: MongoDb, url: "https://www.mongodb.com/es" },
  {
    name: "n8n",
    img: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png",
    url: "https://n8n.io/",
  },
  { name: "Nest.jS", img: Nestjs, url: "https://nestjs.com" },
  { name: "Next.js", img: Nextjs, url: "https://nextjs.org/" },
  { name: "Node.js", img: Node, url: "https://nodejs.org/es" },
  { name: "PostgreSQL", img: Postgress, url: "https://www.postgresql.org/" },
  {
    name: "Prisma",
    img: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4",
    url: "https://www.prisma.io/",
  },
  { name: "React", img: ReactLogo, url: "https://es.react.dev/" },
  { name: "React Native", img: ReactNative, url: "https://reactnative.dev/" },
  { name: "Redux", img: Redux, url: "https://redux.js.org/" },
  { name: "Sequelize", img: Sequelize, url: "https://sequelize.org/" },
  { name: "Tailwind", img: Tailwind, url: "https://tailwindcss.com/" },
  {
    name: "TypeORM",
    img: "https://avatars.githubusercontent.com/u/20165699?s=200&v=4",
    url: "https://typeorm.io/",
  },
  {
    name: "Vibe Coding",
    img: "https://cursor.com/marketing-static/_next/image?url=%2Fmarketing-static%2Fdownload%2Fapp-icon-3d-dark.png&w=3840&q=70&dpl=dpl_7DjcBeUVG5rPWyBdbERH3xNqHhBk",
    url: "https://cursor.com/",
  },
  {
    name: "WhatsApp API",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    url: "https://business.whatsapp.com/products/platform-interface",
  },
  { name: "Zustand", img: Zustand, url: "https://zustand-demo.pmnd.rs/" },
];

const Skills = () => {
  return (
    <section
      id="Skills"
      className="relative py-24 bg-white dark:bg-[#0b1120] overflow-hidden transition-colors duration-500"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Mis <span className="text-yellow-400">Habilidades</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-subtitle"
          >
            Tecnologías y herramientas que utilizo para crear productos
            digitales de alto rendimiento.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
          {techsIcons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 6) * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex flex-col items-center w-full"
            >
              <div className="glass-card w-full aspect-square flex items-center justify-center p-4 group-hover:border-yellow-400/50 group-hover:shadow-yellow-400/20 transition-all duration-300">
                <a
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center"
                >
                  <motion.img
                    src={icon.img}
                    alt={icon.name}
                    className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300 filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  />
                </a>
              </div>
              <h4 className="mt-4 text-sm font-bold text-slate-700 dark:text-slate-300 group-hover:text-yellow-400 transition-colors uppercase tracking-widest text-center px-2">
                {icon.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decoración sutil */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Skills;
