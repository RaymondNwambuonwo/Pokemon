import React, { Component } from "react";

function Pokelist({ pokemon }) {
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}

export default Pokelist;
