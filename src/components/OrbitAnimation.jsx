import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TechInput from "./TechInput";
import BrandOutput from "./BrandOutput";

const OrbitAnimation = () => {
  const [startJump, setStartJump] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStartJump(true), 6000);
    const stopTimer = setTimeout(() => setStartJump(false), 11000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 w-full px-4 md:px-0 overflow-hidden">
      <TechInput />

      <motion.div
        className="my-6 md:mx-6 z-20"
        animate={startJump ? { y: [-10, 0, -10] } : { y: 0 }}
        transition={
          startJump
            ? {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }
            : {}
        }
      >
        <img
          src="/sibi.jpeg"
          alt="profile"
          className="rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover border-2 border-black shadow-lg"
        />
      </motion.div>

      <BrandOutput />
    </div>
  );
};

export default OrbitAnimation;
