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
      <div className="w-full flex flex-col items-center sm:items-start">
        <h1 className="w-24 mb-4 border-b-8 border-spring-green-600">Skills</h1>
        <h4 className="w-full pb-8">
          Estas son las tecnologías que he trabajado
        </h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {techsIcons.map((icon, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="w-32 h-32 flex items-center justify-center p-3 bg-black dark:bg-white rounded-full cursor-pointer hover:shadow-[0_0_12px_#000] dark:hover:shadow-[0_0_12px_#fff]"
          >
            <motion.img src={icon.img} alt={icon.name} className="w-20" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
