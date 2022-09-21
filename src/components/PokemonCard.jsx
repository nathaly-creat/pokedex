import React, { useState } from "react";
import DetailCard from "./DetailCard/DetailCard.jsx";

const PokemonCard = ({ id, image, name, type, species }) => {
  const style = type + " thumb-container";

  //Variabilizo el evento del detalle de pokemon card.
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log("funcionando el modal");
    setButtonClicked(true);
    // <DetailCard results={{id, species}} />
  };

  // const detail = () => {
  //     console.log('funcionando')
  // // setDetails({abierto: true})
  // }

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
        {/* <button onClick={(e) => handleButtonClick(e)}>
          {" "}
          Detalles
        </button> */}
          {" "}
          {buttonClicked && <DetailCard results={{id, species}} />}{" "}
      </div>
    </div>
  );
};

export default PokemonCard;


// const UserManagement = () => {
//   const [hasRender, setRender] = useState(false);
//   const onShow = React.useCallback(() => setRender(true), []);
//   return (
//     <>
//       {" "}
//       <button onClick={onShow}>Show Employee Management</button>{" "}
//       {hasRender && <EmployeeManagement />}{" "}
//     </>
//   );
// };

// import React, {useState} from 'react';
// import Editproduct from '../adminstock/Editproduct';

//     const Home = (props) =>{

//     //Utiliza el hook useState
//     const [buttonClicked, setButtonClicked] = useState(false);

//     handleButtonClick = () => {
//         setButtonClicked(true)
//     }

//     return(
//        <div>
//           <Button
//               onClick={() => handleButtonClick}
//               entry = {index}>
//               <Edit color="primary" fontSize="small"/>
//           </Button>

//           //Utiliza una condición ternaria para condicionar el render de la etiqueta.
//           //Si se presionó el botón buttonClicked === true y se renderiza.
//           //En caso contrario devuelve null y no renderiza nada.
//           {buttonClicked ? <Editproduct productArray={products}> : null}
//        </div>
//     );
//    }
// Si no hace nada, prueba cambiar esto:

// onClick={() => handleButtonClick}
// por:

// onClick={handleButtonClick}
