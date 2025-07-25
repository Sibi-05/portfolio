import { motion } from "framer-motion";
import { FaInstagram, FaAmazon, FaLinkedin } from "react-icons/fa";
import { SiPaytm, SiSwiggy } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const brandIcons = [
  <FaInstagram className="text-pink-500" />,
  <FaAmazon className="text-black" />,
  <SiPaytm className="text-blue-600" />,
  <FcGoogle />,
  <FaLinkedin className="text-blue-700" />,
  <SiSwiggy className="text-orange-600" />,
];

const BrandOutput = () => {
  return (
    <div className="flex gap-4 w-[320px] justify-end z-10 relative">
         {brandIcons.map((icon, idx) => (
           <motion.div
             key={idx}
             className="text-4xl absolute"
             initial={{ x: -350, opacity: 1, scale: 0.8 }}
             animate={{ x: 150, opacity: 1, scale: 1 }}
             transition={{
               delay:12+idx * 0.5,
               duration: 2.5,
               ease: "linear",
             }}
             delay={20}
           >
             {icon}
           </motion.div>
         ))}
       </div>
  );
};

export default BrandOutput;
