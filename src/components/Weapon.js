import React, { useContext, useState } from "react";
import Camo from "./Camo";
import CamoCollapse from "./CamoCollapse";

import { GameContext } from "../contexts/GameContext";
import WeaponHeader from "./layout/headers/WeaponHeader";

import { checkEveryStatus } from "../utilities";

export default function Weapon({ weapon, index }) {
  const [camo, setCamo] = useState({});
  const [camoIndex, setCamoIndex] = useState(0);

  const { game, type, data } = useContext(GameContext);
  const [typeValue, setTypeValue] = type;
  const [dataValue, setDataValue] = data;

  var backgroundContainer = "card weapon ";

  var buttonBackground = "btn gold-button ";

  if (weapon.diamond) {
    backgroundContainer += "diamond";
    buttonBackground += "gold";
  } else if (weapon.gold) {
    backgroundContainer += "gold";
    buttonBackground += "gold";
  }

  const camoProgressUpdate = (e) => {
    var newData = JSON.parse(localStorage.getItem(typeValue));

    newData[weapon.type][index].camos[camoIndex].current = e;

    var current = newData[weapon.type][index].camos[camoIndex].current;
    var total = newData[weapon.type][index].camos[camoIndex].total;

    if (current >= total) {
      newData[weapon.type][index].camos[camoIndex].completion = true;
    } else {
      newData[weapon.type][index].camos[camoIndex].completion = false;
    }

    var goldCheck = checkEveryStatus(
      newData[weapon.type][index].camos,
      "completion",
      true
    );

    if (goldCheck) {
      newData[weapon.type][index].gold = true;
    } else {
      newData[weapon.type][index].gold = false;
    }

    var diamondCheck = checkEveryStatus(newData[weapon.type], "gold", true);

    if (diamondCheck) {
      newData[weapon.type].forEach(function (weapon) {
        weapon.diamond = true;
      });
    } else {
      newData[weapon.type].forEach(function (weapon) {
        weapon.diamond = false;
      });
    }

    localStorage.setItem(typeValue, JSON.stringify(newData));

    setDataValue(newData);

    var newCamo = camo;

    newCamo.current = e;

    setCamo(newCamo);
  };

  const onToggle = (camo, index) => {
    setCamo(camo);
    setCamoIndex(index);
  };

  const onToggleCamo = () => {
    var newData = JSON.parse(localStorage.getItem(typeValue));

    if (camo.completion) {
      newData[weapon.type][index].camos[camoIndex].completion = false;
      newData[weapon.type][index].camos[camoIndex].current = 0;
    } else {
      newData[weapon.type][index].camos[camoIndex].completion = true;
      newData[weapon.type][index].camos[camoIndex].current =
        newData[weapon.type][index].camos[camoIndex].total;
    }

    console.log(newData[weapon.type][index]);
    var goldCheck = checkEveryStatus(
      newData[weapon.type][index].camos,
      "completion",
      true
    );

    if (goldCheck) {
      newData[weapon.type][index].gold = true;
    } else {
      newData[weapon.type][index].gold = false;
    }

    var diamondCheck = checkEveryStatus(newData[weapon.type], "gold", true);

    if (diamondCheck) {
      newData[weapon.type].forEach(function (weapon) {
        weapon.diamond = true;
      });
    } else {
      newData[weapon.type].forEach(function (weapon) {
        weapon.diamond = false;
      });
    }

    localStorage.setItem(typeValue, JSON.stringify(newData));

    setDataValue(newData);

    var newCamo = newData[weapon.type][index].camos[camoIndex];

    setCamo(newCamo);
  };

  const onToggleGold = () => {
    var newData = JSON.parse(localStorage.getItem(typeValue));

    if (weapon.gold) {
      newData[weapon.type][index].gold = false;
    } else {
      newData[weapon.type][index].gold = true;
    }

    var diamondCheck = checkEveryStatus(newData[weapon.type], "gold", true);

    if (diamondCheck) {
      newData[weapon.type].forEach(function (weapon) {
        weapon.diamond = true;
      });
    } else {
      newData[weapon.type].forEach(function (weapon) {
        weapon.diamond = false;
      });
    }

    localStorage.setItem(typeValue, JSON.stringify(newData));

    setDataValue(newData);
  };

  return (
    <>
      <div className={backgroundContainer}>
        <WeaponHeader header={weapon.name} />

        <div className="camos">
          {weapon.camos.map((camo, cIndex) => {
            return (
              <Camo
                camo={camo}
                id={weapon.name}
                key={cIndex}
                index={cIndex}
                onToggle={onToggle}
              />
            );
          })}
        </div>
        <div className="gold-button-container">
          <button className={buttonBackground} onClick={onToggleGold}>
            GOLD
          </button>
        </div>
      </div>

      <CamoCollapse
        id={weapon.name}
        camo={camo}
        changeCamo={camoProgressUpdate}
        onToggleCamo={onToggleCamo}
      />
    </>
  );
}
