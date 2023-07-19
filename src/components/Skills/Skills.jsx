import { motion } from "framer-motion";

// Images
import HTML from "../../assets/skills/HTML.png";
import CSS from "../../assets/skills/CSS.png";
import Js from "../../assets/skills/JS.png";
import React from "../../assets/skills/React.png";
import ReactNative from "../../assets/skills/ReactNative.png";
import Postgress from "../../assets/skills/Postgress.png";
import Redux from "../../assets/skills/Redux.png";
import Node from "../../assets/skills/NodeJs.png";
import Git from "../../assets/skills/GIT.png";
import Bootstrap from "../../assets/skills/Bootstrap.png";
import Tailwind from "../../assets/skills/Tailwind.png";
import Sass from "../../assets/skills/Sass.png";

const techsIcons = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "Javascript", img: Js },
  { name: "React", img: React },
  { name: "React Native", img: ReactNative },
  { name: "Postgress", img: Postgress },
  { name: "Redux", img: Redux },
  { name: "Node", img: Node },
  { name: "Git", img: Git },
  { name: "Bootstrap", img: Bootstrap },
  { name: "Tailwind", img: Tailwind },
  { name: "Sass", img: Sass },
];

const Skills = () => {
  return (
    <div className="Skills">
      <div className="w-11/12 flex flex-col items-center text-center mx-auto">
        <h1 className="w-64 text-center text-yellow-400 dark:text-yellow-400 text-5xl pb-2 mb-6 mx-auto border-b-4 border-yellow-400">
          Skills
        </h1>
        <h4 className="w-full pb-8">
          Estas son las tecnologías que he trabajado
        </h4>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {techsIcons.map((icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 1000 }}
            className="w-28 h-28 flex items-center justify-center p-3 bg-black dark:bg-white rounded-full cursor-pointer hover:shadow-[0_0_12px_#000] dark:hover:shadow-[0_0_12px_#fff]"
          >
            <motion.img src={icon.img} alt={icon.name} className="w-20" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
