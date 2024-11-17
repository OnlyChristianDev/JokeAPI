"use client";
import React, { useEffect, useState } from 'react';

export default function Jokes() {
  const [jokes, setJokes] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [currentJoke, SetCurrentJoke] = useState(""); 

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
      SetCurrentJoke(jokes[aleatoryNumber])
      jokes.splice(aleatoryNumber, 1)
    } else {
      window.alert("ARRAY VAZIO")
    }
  }

  return (
    <div>
      <h1>Piadas</h1>
      <button onClick={jokesfunction}>clique</button>
      <p>
        {currentJoke}
      </p>
    </div>
  );
}
