import React, { Component, useState, useEffect } from "react";
import Pokelist from "./Pokelist";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, []);

  return <Pokelist pokemon={pokemon} />;
}

export default App;
