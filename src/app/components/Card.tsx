import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import BlueCard from "../../../public/BlueCard.png";
import RedCard from "../../../public/RedCard.png";
import Aviso from './Aviso';
import { AnimatePresence } from "framer-motion";
import Indenticacao from './Indentificacao';
import ArrayVazio from './ArrayVazio';

interface JokeProps {
  joke: string;
  answer: string;
  onNextJoke: () => void;
  animationArray: boolean;
  ArrayNull: () => void;

}

export default function Card({ joke, answer, onNextJoke, animationArray, ArrayNull }: JokeProps) {
  const [flippedRedCard, setFlippedRedCard] = useState(false);
  const [flippedBlueCard, setFlippedBlueCard] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [showIndenticacao, setShowIndenticacao] = useState(true);

  useEffect(() => {
  
    if (joke) {
      setShowIndenticacao(false);
    }
  }, [joke]);

  const flippedBlueCardFunction = () => {
    if (flippedBlueCard) {
      setFlippedRedCard(!flippedRedCard);
    } else if (!flippedBlueCard && flippedRedCard) {
      setFlippedRedCard(!flippedRedCard);
    } else {
      setAnimation(true);
    }
  };

  const flippedRedCardFunction = () => {
    if (flippedBlueCard) {
      setFlippedBlueCard(false);
      setFlippedRedCard(false);
    } else {
      setFlippedBlueCard(true);
      onNextJoke();
    }
  };

  useEffect(() => {
    if (animation) {
      setTimeout(() => setAnimation(false), 1600);
    }
  }, [animation]);

  const ArrayNullFunction = () => {
    ArrayNull();
    setFlippedBlueCard(false);
    setFlippedRedCard(false);
    
  }
 
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-10">
        <div className="flex items-center justify-center flex-col gap-5">
        <AnimatePresence>
          {showIndenticacao && <Indenticacao nomeDaCarta={"Piadas"} />} 
          </AnimatePresence>
          <motion.div
            className={`w-[300px] cursor-pointer shadow-2xl h-[412px] rounded-lg flex items-center justify-center transition-colors duration-600 ${
              flippedBlueCard ? "bg-[#9A6AF9] p-10" : ""
            }`}
            initial={{ rotateY: 0 }}
            animate={{
              rotateY: flippedBlueCard ? 180 : 0,
              x: animation ? [0, 10, -10, 10, -10, 0] : 0,
            }}
            transition={{ duration: 0.6 }}
            onClick={flippedRedCardFunction}
          >
            {flippedBlueCard ? (
              <p className="font-semibold scale-x-[-1] text-center text-2xl">{joke}</p>
            ) : (
              <Image
                className=""
                src={BlueCard}
                alt="Carta azul com a piada"
                width={300}
                height={300}
              />
            )}
          </motion.div>
        </div>
        <div className="flex items-center justify-center flex-col gap-5">
          {showIndenticacao && <Indenticacao nomeDaCarta={"Respostas"} />}
          <motion.div
            className={`w-[300px] cursor-pointer shadow-2xl h-[412px] rounded-lg flex items-center justify-center transition-colors duration-600 ${
              flippedRedCard ? "bg-[#F55F56] p-10" : ""
            }`}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: flippedRedCard ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            onClick={flippedBlueCardFunction}
          >
            {flippedRedCard ? (
              <p className="text-2xl scale-x-[-1] text-center font-semibold">{answer}</p>
            ) : (
              <Image
                className=""
                src={RedCard}
                alt="Carta azul com a piada"
                width={300}
                height={300}
              />
            )}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {animation && <Aviso />}
         {animationArray && <ArrayVazio refreshArray={ArrayNullFunction} /> }
      </AnimatePresence>
    </div>
  );
}
