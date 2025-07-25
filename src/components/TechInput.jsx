import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNode,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";

const techIcons = [
  <FaReact className="text-cyan-500" />,
  <FaPython className="text-yellow-500" />,
  <FaNode className="text-green-600" />,
  <SiRedux className="text-purple-600" />,
  <SiMongodb className="text-green-700" />,
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
];

const TechInput = () => {
  return (
    <div className="flex gap-4 w-[320px] justify-end z-10 relative">
      {techIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          className="text-4xl absolute"
          initial={{ x: -350, opacity: 1, scale: 1 }}
          animate={{ x: 150, opacity: 0.9, scale: 0.9 }}
          transition={{
            delay: idx * 0.5,
            duration: 2.5,
            ease: "linear",
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default TechInput;
