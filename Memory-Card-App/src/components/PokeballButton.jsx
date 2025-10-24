import React from "react";
import pokeballIcon from "../../public/pokeball.png";

function PokeballButton() {
  return (
    <button>
      <img
        src={pokeballIcon}
        alt="Pokeball Icon"
        className="h-10 w-10 hover:animate-spin transition-transform"
      />
    </button>
  );
}

export default PokeballButton;
