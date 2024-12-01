import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Indenticacao({ nomeDaCarta }: { nomeDaCarta: string }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center flex-col max-sm:mb-[-30px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-semibold">{nomeDaCarta}</h1>
      <motion.div
        className="mt-5 max-sm:mt-0 rounded-lg flex items-center justify-center text-white text-lg font-bold"
        animate={{
          y: [0, isSmallScreen ? -3 : -18, 0], 
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <MdKeyboardDoubleArrowDown />
      </motion.div>
    </motion.div>
  );
}
