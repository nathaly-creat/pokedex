import React, { useEffect, useState } from "react";

const TableCard = ({ id, abilities, stats }) => {
  const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);

  useEffect(() => {
    setAbilitiesPokemon();
  }, []);

  return (
    <div>
       <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Habilidades</th>
              <th scope="col">Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{id}</th>
              <td>{abilities.name}</td>
              <td>{stats}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default TableCard;
