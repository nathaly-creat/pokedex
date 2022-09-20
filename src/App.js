// import './App.css';
// import { useEffect } from 'react';
import { Col } from "antd";
import NavBar from '../src/components/Navbar/NavBar.jsx'
import {Pokemons} from './components/Pages/Pokemons.jsx';
// import PokemonList from './components/PokemonsProfile/PokemonList.jsx';
// import { GetPokemon } from './api/petitions.js';


  function App() {
    // console.log('esto', pokemons)
    
    // useEffect(() => {
    //   const fetchPokemons = async () => {
    //     const pokemonsResponse= await getPokemon();
    //     setPokemons(pokemonsResponse); //Actualizando el estado con la lista de la api.
    //   };
  
    //   fetchPokemons();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);
  return (
    <div className="App">
     <NavBar />
     <Col span={8} offset={8}>
     <Pokemons />
     </Col>
    </div>
  );
}

export default App;
