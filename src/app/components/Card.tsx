import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BlueCard from "../../../public/BlueCaard.png";
import RedCard from "../../../public/RedCard.png";
interface JokeProps {
  joke: string;
  answer : string
}

export default function Card({ joke, answer }: JokeProps) {
  const [flippedRedCard, setFlippedRedCard] = useState(false);
  const [flippedBlueCard, setFlippedBlueCard] = useState(false);
  const [animation, setAnimation] = useState(false)

  const flippedBlueCardFunction = () => {
    if (flippedBlueCard){
      setFlippedRedCard(!flippedRedCard)
    } else if (flippedBlueCard == false && flippedRedCard == true){
      setFlippedRedCard(!flippedRedCard)
    } else {
      setAnimation(true)
    }    
  }

  useEffect(()=> {
    if (animation) {
      
      setTimeout(() => setAnimation(false), 600); 
    }
   
  },[animation])

  return (
    <div className='flex gap-10 items-center justify-center'>
      <motion.div
        className={`w-[300px] cursor-pointer shadow-2xl h-[412px] rounded-lg flex items-center justify-center transition-colors duration-600 ${flippedBlueCard ? 'bg-[#370A77] p-10' : ''}`} 
        initial={{ rotateY: 0 }}
        animate={{
          rotateY: flippedBlueCard ? 180 : 0,
          x: animation ? [0, 10, -10, 10, -10, 0] : 0, 
        }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlippedBlueCard(!flippedBlueCard)}
      >
        {flippedBlueCard ?  <p className='font-semibold scale-x-[-1] text-center text-2xl'>
        {joke}
            </p> : ""}
        {flippedBlueCard ? (
            ""
        ):( 
          <Image className='' src={BlueCard} alt='Carta azul com a piada' width={300} height={300} />
        )}
      </motion.div>
      <motion.div
        className={`w-[300px] cursor-pointer shadow-2xl h-[412px] rounded-lg flex items-center justify-center transition-colors duration-600 ${flippedRedCard ? 'bg-[#F55F56] p-10' : ''}`} 
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flippedRedCard ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={flippedBlueCardFunction}
      >
        {flippedRedCard ?  <p className='text-2xl scale-x-[-1] text-center font-semibold'>
        {answer}
            </p> : ""}
        {flippedRedCard ? (
            ""
        ):( 
          <Image className='' src={RedCard} alt='Carta azul com a piada' width={300} height={300} />
        )}
      </motion.div>
    </div>
  );
}