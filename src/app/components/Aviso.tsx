import { motion } from "framer-motion";

export default function Aviso() {
    return (
        <motion.div
            className="fixed bottom-8 flex items-center justify-center h-14 p-6 rounded-xl w-[540px] bg-white max-sm:w-80"
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }} 
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-black text-center text-md max-sm:text-sm font-semibold">
                Ei, descubra a piada antes! Vire a carta azul primeiro.
            </h1>
        </motion.div>
    );
}
