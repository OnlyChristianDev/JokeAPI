import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

export default function Indenticacao( {nomeDaCarta} ){
    return(
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-semibold">
                {nomeDaCarta}
            </h1>
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
        </div>
    )
}