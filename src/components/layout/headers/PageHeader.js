import React, { useContext } from "react";

import { GameContext } from "../../../contexts/GameContext";

export default function PageHeader() {
  const { game, type } = useContext(GameContext);

  const gameValue = game[0];
  const typeValue = type[0];

  return (
    <div className="page-header-container">
      <h1 className="page-header-title">{typeValue}</h1>
      <h2 className="page-header-subtitle">{gameValue}</h2>
    </div>
  );
}
