import React from "react";
import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [game, setGame] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState({});

  return (
    <GameContext.Provider
      value={{ game: [game, setGame], type: [type, setType], data: [data, setData] }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
