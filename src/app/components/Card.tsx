import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiCardAceClubs } from "react-icons/gi";

interface JokeProps {
  joke: string;
}

export default function Card({ joke }: JokeProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => setFlipped(!flipped)}
        >
        <GiCardAceClubs className="text-[600px] cursor-pointer " />
      </motion.div>
      {flipped && (
        <div>
          {joke}
        </div>
      )}
    </div>
  );
}
