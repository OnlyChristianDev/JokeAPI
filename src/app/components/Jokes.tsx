"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Jokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    async function fetchJokes() {
      try {
        const response = await axios.get('/api/jokeapi');
        console.log(response.data);
        setJokes(response.data);
      } catch (error) {
        console.error(error + " error");
      }
    }

    fetchJokes();
  }, []);

  return (
    <div>
      <h1>Piadas</h1>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke}</li>
        ))}
      </ul>
    </div>
  );
}

export default Jokes;