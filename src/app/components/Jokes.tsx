"use client";
import React, { useEffect, useState } from 'react';
import Card from './Card';

export default function Jokes() {
  const [jokes, setJokes] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [currentJoke, SetCurrentJoke] = useState(""); 
  const [currentAnswer, SetCurrentAnswer] = useState(""); 

  useEffect(() => {
    async function fetchJokes() {
      const url = "/api/jokeapi";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setJokes(json)
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    }
   
    fetchJokes();
  }, []);

  const aleatoryNumberFunction = (min : number, max : number) => {
    return Math.floor(Math.random() * (max - min - 1) + min)
  }

  const jokesfunction = () => {
    if (jokes.length > 0) {
      if (loading){
        return <p>Carregando piadas...</p>;
      }
      const aleatoryNumber = aleatoryNumberFunction(0, jokes.length - 1)
      const obj = jokes[aleatoryNumber]
      SetCurrentJoke(obj.joke)
      SetCurrentAnswer(obj.answer)
      jokes.splice(aleatoryNumber, 1)
    } else {
      window.alert("ARRAY VAZIO")
    }
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col'>
      <Card joke={currentJoke} answer={currentAnswer} onNextJoke={jokesfunction}  />
    </div>
  );
}
