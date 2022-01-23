import React from "react";
import { createContext, useState } from "react";

export const WeaponsContext = createContext();

export const WeaponsProvider = (props) => {
  const [weapons, setWeapons] = useState({});

  return (
    <WeaponsContext.Provider value={[weapons, setWeapons]}>
      {props.children}
    </WeaponsContext.Provider>
  );
};
