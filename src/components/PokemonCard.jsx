import React, { useState } from 'react'
import DetailCard from './DetailCard/DetailCard.jsx';

const PokemonCard = ({id, image, name, type }) => {
    const style = type + " thumb-container";
    // const [details, setDetails] = useState({
    //     abierto:false,
    // })

    const detail = () => {
        console.log('funcionando')
    // setDetails({abierto: true})
    }

    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            <button onClick={() => detail()}>Detalles</button>
           
        </div>
    )
}

export default PokemonCard;
