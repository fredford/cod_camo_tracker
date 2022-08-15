import React from "react";
import { createContext, useState } from "react";
import { AllWeaponGroups } from "../utilities/WeaponFactory";

import weaponsAtomic from "../data/atomic/weapons/index";

export const GameContext = createContext();

export const GameProvider = (props) => {
  let localData = JSON.parse(localStorage.getItem(props.type));

  const dataWeaponGroups = new AllWeaponGroups(localData ? localData : typeWeapons[props.type]);

  if (!localData) localStorage.setItem(props.type, JSON.stringify(dataWeaponGroups));

  const [game, setGame] = useState(props.game);
  const [type, setType] = useState(props.type);
  const [data, setData] = useState(dataWeaponGroups);

  return (
    <GameContext.Provider
      value={{ game: [game, setGame], type: [type, setType], data: [data, setData] }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

const typeWeapons = {
  Atomic: weaponsAtomic,
};
