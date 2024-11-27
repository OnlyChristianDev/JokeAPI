import { motion } from "framer-motion";

export default function ArrayVazio( {refreshArray}) {
    return (
        <motion.div
            className="fixed bottom-8 flex items-center justify-center h-14 p-6 rounded-xl bg-white"
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }} 
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between w-full max-w-3xl">
                <h1 className="text-black text-center text-md font-semibold">
                    É, esse foi o fim das piadas. Clique no botão para rever-las.
                </h1>
                <button onClick={refreshArray} className="ml-4 font-semibold bg-[#9A69FB] text-white px-7 py-2 rounded-lg hover:bg-[#8859e6] transition">
                    REVER
                </button>
            </div>
        </motion.div>
    );
}
