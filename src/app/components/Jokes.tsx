"use client";
import React, { useEffect, useState } from 'react';

export default function Jokes() {
  const [jokes, setJokes] = useState<string[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    async function fetchJokes() {
      const url = "/api/jokeapi";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        setLoading(false)
        const json = await response.json();
        console.log(json);
        setJokes(json)
      } catch (error) {
        console.error(error);
      }
    }
   
    fetchJokes();
  }, []);

  if (loading) return <p>Carregando piadas...</p>;


  return (
    <div>
      <h1>Piadas</h1>
      <button >clique</button>
      <p>
        {jokes}
      </p>
    </div>
  );
}
