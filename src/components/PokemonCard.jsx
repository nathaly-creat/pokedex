import React, { useState } from "react";
import DetailCard from "./DetailCard/DetailCard.jsx";

const PokemonCard = ({ id, image, name, type, species, abilities, stats }) => {
  const style = type + " thumb-container";

  //Variabilizo el evento del detalle de pokemon card.
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
    <DetailCard />
  };


  return (
    <div className={style} onClick={(e) => handleButtonClick(e)} >
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
      <div>
          {buttonClicked && <DetailCard id={id} image={image} name={name} type={type} species={species} abilities={abilities} stats={stats} 
          />}{" "}
      </div>
    </div>
  );
};

export default PokemonCard;
