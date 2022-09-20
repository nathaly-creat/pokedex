import React from "react";
import { CardPokemon } from "./CardPokemon.jsx";

export const Cards = ({ results }) => {
    console.log('resultasde cards', results)
  return (
    <div className="container-pokemon">
      <ul className="cards">
        {results.map((e) => (
          <li className='card-item' key={e.name}>
            <CardPokemon url={e.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
