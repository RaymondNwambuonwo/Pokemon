import React, { Component, useState } from "react";
import Pokelist from "./Pokelist";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"]);

  return (
    <Pokelist pokemon={pokemon}/>
  )
}

export default App;
