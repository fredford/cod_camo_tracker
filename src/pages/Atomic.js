import React, { useState, useContext } from "react";
import Weapon from "../components/Weapon";

import { GameProvider, GameContext } from "../contexts/GameContext";

export default function Atomic() {
  const { game, type } = useContext(GameContext);

  const [gameValue, setGameValue] = game;
  const [typeValue, setTypeValue] = type;

  React.useEffect(() => {
    setGameValue("Vanguard");
    setTypeValue("Atomic");
  });

  console.log("Here ", gameValue);
  return (
    <div>
      <h1>{gameValue}</h1>
      <div className="container-weapons">
        <Weapon name="Automaton" />
        <Weapon name="STG44" />
      </div>
    </div>
  );
}
