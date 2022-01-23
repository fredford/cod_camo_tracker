import React, { useState, useContext } from "react";
import PageHeader from "../components/layout/headers/PageHeader";
import Weapon from "../components/Weapon";

import { GameProvider, GameContext } from "../contexts/GameContext";

export default function DMUltra() {
  const { game, type } = useContext(GameContext);

  const [gameValue, setGameValue] = game;
  const [typeValue, setTypeValue] = type;

  React.useEffect(() => {
    setGameValue("Cold War");
    setTypeValue("DM Ultra");
  });

  return (
    <div>
      <PageHeader type={typeValue} gameValue={gameValue} />
      <Weapon name="M4A1" />
    </div>
  );
}
