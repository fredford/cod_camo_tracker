import React, { useContext } from "react";
import Weapon from "../Weapon";
import SectionHeader from "./headers/SectionHeader";

import { GameContext } from "../../contexts/GameContext";

export default function Section({ name, weaponsList }) {
  const { game, type, data } = useContext(GameContext);
  const [dataValue, setDataValue] = data;

  var diamondCheck = weaponsList.every(function (weapon) {
    return weapon.gold === true;
  });

  if (diamondCheck) {
    weaponsList.forEach(function (weapon, index) {
      weapon.diamond = true;
      dataValue[name][index].diamond = true;
      localStorage.setItem("atomic", JSON.stringify(dataValue));
    });
  }
  return (
    <>
      <SectionHeader name={name} />
      <div className="container-weapons">
        {weaponsList.map((weapon, index) => (
          <Weapon key={weapon.name} weapon={weapon} index={index} />
        ))}
      </div>
    </>
  );
}
