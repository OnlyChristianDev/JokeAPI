"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Jokes() {
  const [jokes, setJokes] = useState<{ joke: string; answer: string }[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [currentJoke, setCurrentJoke] = useState(""); 
  const [currentAnswer, setCurrentAnswer] = useState(""); 
  const [animationArray, setAnimationArray] = useState(false);

  useEffect(() => {
    async function fetchJokes() {
      const url = "/api/jokeapi";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setJokes(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchJokes();
  }, []);

  const aleatoryNumberFunction = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const jokesFunction = () => {
    if (jokes.length > 0) {
      if (loading) {
        return <p>Carregando piadas...</p>;
      }
      const aleatoryNumber = aleatoryNumberFunction(0, jokes.length);
      const selectedJoke = jokes[aleatoryNumber];

      setCurrentJoke(selectedJoke.joke);
      setCurrentAnswer(selectedJoke.answer);

      const updatedJokes = jokes.filter((_, index) => index !== aleatoryNumber);
      setJokes(updatedJokes);
    } else {
      console.log("Array vazio");
      setAnimationArray(true);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <Card
        joke={currentJoke}
        answer={currentAnswer}
        onNextJoke={jokesFunction}
        animationArray={animationArray}
      />
    </div>
  );
}
