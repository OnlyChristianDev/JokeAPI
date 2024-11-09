"use client"
import axios from "axios"

async function getJokes() {
    try {
      const response = await axios.get('..pages/api/JokeApi');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


export default function Jokes(){
    return(
       <div>
        <button onClick={getJokes}>clique</button>
       </div>
    )
}