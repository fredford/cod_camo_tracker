// Library imports
import React, { createContext, useState } from "react";
// Utilites
import { AllWeaponGroups } from "../utilities/WeaponFactory";
// Data structures
import weaponsAtomic from "../data/atomic/weapons/index";

// Create the Game Context for React
export const GameContext = createContext();

export const GameProvider = (props) => {
  // Load the localStorage data
  let localData = JSON.parse(localStorage.getItem(props.type));
  // Instantiate the data for the Game Provider
  const dataWeaponGroups = new AllWeaponGroups(localData ? localData : typeWeapons[props.type]);
  // If there is no data is localStorage update the localStorage for the data in the app
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

// Object containing all weapon data for different game types
const typeWeapons = {
  Atomic: weaponsAtomic,
};
