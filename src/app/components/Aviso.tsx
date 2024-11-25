import { motion } from "framer-motion";

export default function Aviso() {
    return (
        <motion.div
            className="fixed bottom-8 flex items-center justify-center h-14 p-6 rounded-xl bg-white"
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }} 
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-black text-center text-md font-semibold">
                Ei, descubra a piada antes! Vire a carta azul primeiro.
            </h1>
        </motion.div>
    );
}
