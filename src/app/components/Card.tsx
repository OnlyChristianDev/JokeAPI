import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import BlueCard from "../../../public/BlueCaard.png";
import RedCard from "../../../public/RedCard.png";
interface JokeProps {
  joke: string;
}

export default function Card({ joke }: JokeProps) {
  const [flippedRedCard, setFlippedRedCard] = useState(false);
  const [flippedBlueCard, setFlippedBlueCard] = useState(false);

  return (
    <div className='flex  gap-10 items-center justify-center'>
      <motion.div
        className={`w-[300px] cursor-pointer shadow-2xl h-[412px] rounded-lg flex items-center justify-center transition-colors duration-600 ${flippedBlueCard ? 'bg-[#370A77]' : ''}`} 
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flippedBlueCard ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlippedBlueCard(!flippedBlueCard)}
      >
        {flippedBlueCard ? (
            ""
        ):( 
          <Image className='' src={BlueCard} alt='Carta azul com a piada' width={300} height={300} />
        )}
      </motion.div>
      <motion.div
        className={`w-[300px] cursor-pointer shadow-2xl h-[412px] rounded-lg flex items-center justify-center transition-colors duration-600 ${flippedRedCard ? 'bg-[#F55F56]' : ''}`} 
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flippedRedCard ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlippedRedCard(!flippedRedCard)}
      >
         {joke}
        {flippedRedCard ? (
            ""
        ):( 
          <Image className='' src={RedCard} alt='Carta azul com a piada' width={300} height={300} />
        )}
      </motion.div>

    </div>
  );
}