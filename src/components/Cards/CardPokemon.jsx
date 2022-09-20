import React from "react";
import { GetPokemon } from "../../api/petitions";

export const CardPokemon = ({ url }) => {
  console.log("URRRLLLL", url);
  const statePokemon = GetPokemon(url);
  const { loading, data} = statePokemon;
  console.log('null', data);


  return (
    <div>
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <div className="card">
          <div className="card-header">
            <p className="card-title"> </p>
          </div>
          {/* <div className="card-body">
            <img src={data.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-footer">
            <p className="card-text text-capitalize">{data.forms[0].name} </p>
          </div> */}
        </div>
      )}
    </div>
  );
};
