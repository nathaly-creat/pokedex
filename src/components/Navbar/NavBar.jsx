import React from "react";
import "./NavBar.css";
import { Input } from "antd";
import logoPok from "../../../src/assets/image/logoPok.png";

const NavBar = () => {
  return (
    <div className="container-navbar">
      <div className="container-navbar-logo"> 
        <img src={logoPok} alt="Logo" width={35} /><br/>
        <p>Pokédex</p>
      </div>
      <div className="container-search">

      <Input.Search placeholder="Buscar" />
      </div>
    </div>
  );
};

export default NavBar;