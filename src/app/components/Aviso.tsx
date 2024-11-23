import { motion } from "framer-motion";

export default function Aviso() {
    return (
        <motion.div
            className="bg-white h-12 p-5 absolute bottom-24 rounded-xl flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: 50 }}    
            transition={{ duration: 0.5 }} 
        >
            <h1 className="text-black text-center text-md font-semibold">
                Ei, descubra a piada antes! Vire a carta azul primeiro.
            </h1>
        </motion.div>
    );
}
