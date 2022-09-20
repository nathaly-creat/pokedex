/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import {GetPokemon} from '../../../src/api/petitions.js'
import {Cards} from '../../../src/components/Cards/Cards.jsx'


export const Pokemons = () => {
    const [url, setUrl] =useState('https://pokeapi.co/api/v2/pokemon/');
    const statePokemon = GetPokemon(url);
    const {loading,results} = statePokemon
    loading? console.log('loading'):console.log('URLORIGINAL', results)    

    return (
        <div>

        <h1> Mostrando los pokemones        </h1>
        {
            loading ? <h1>Mostrando los pokemones......</h1> : 
            

            <Cards results={results}/>
        }
        </div>
    )
}