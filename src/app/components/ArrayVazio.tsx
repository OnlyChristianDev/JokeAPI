import { motion } from "framer-motion";

interface refreshArrayProps{
    refreshArray : () => void
}
export default function ArrayVazio( {refreshArray} : refreshArrayProps)  {
    return (
        <motion.div
            className="fixed bottom-8 flex items-center justify-center w-[540px] h-14 rounded-xl bg-white max-sm:w-80"
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            exit={{ y: "100%" }} 
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-center p-2">
                <h1 className="text-black text-center text-md max-sm:text-sm font-semibold">
                    Fim das piadas. Clique no botão para rever-las.
                </h1>
                <button onClick={refreshArray} className="ml-4 font-semibold bg-[#9A69FB] text-white px-7 py-2 rounded-lg hover:bg-[#8859e6] transition">
                    REVER
                </button>
            </div>
        </motion.div>
    );
}
