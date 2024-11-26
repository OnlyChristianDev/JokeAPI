import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

export default function Indenticacao({ nomeDaCarta }: { nomeDaCarta: string }) {
  return (
    <motion.div
      className="flex items-center justify-center flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-semibold">{nomeDaCarta}</h1>
      <motion.div
        className="mt-5 rounded-lg flex items-center justify-center text-white text-lg font-bold"
        animate={{
          y: [0, -18, 0],
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
