import React, { useContext, useState } from "react";
import Camo from "./Camo";
import CamoCollapse from "./CamoCollapse";

import { GameContext } from "../contexts/GameContext";

export default function Weapon(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState("");
  const [required, setRequired] = useState("");
  const [image, setImage] = useState("");
  const [index, setIndex] = useState("");

  const { game, type, data } = useContext(GameContext);
  const [dataValue, setDataValue] = data;

  var backgroundContainer = "card weapon ";

  if (props.weapon.diamond) {
    backgroundContainer += "diamond";
  } else if (props.weapon.gold) {
    backgroundContainer += "gold";
  }

  const camoProgressUpdate = (e) => {
    var newData = JSON.parse(localStorage.getItem("atomic"));

    setCurrent(e);

    newData[props.weapon.type][props.index].camos[index].current = e;

    if (e === required) {
      newData[props.weapon.type][props.index].camos[index].completion = true;

      var diamondCheck = newData[props.weapon.type].every(function (weapon) {
        return weapon.gold === true;
      });

      if (diamondCheck) {
        newData[props.weapon.type].forEach(function (weapon, index) {
          weapon.diamond = true;
          newData[props.weapon.type][index].diamond = true;

          localStorage.setItem("atomic", JSON.stringify(newData));
        });
      } else {
        newData[props.weapon.type].forEach(function (weapon, index) {
          weapon.diamond = false;
          newData[props.weapon.type][index].diamond = false;
          localStorage.setItem("atomic", JSON.stringify(newData));
        });
      }

      var goldCheck = props.weapon.camos.every(function (v) {
        return v.completion === true;
      });

      if (goldCheck) {
        newData[props.weapon.type][props.index].gold = true;
      }
    } else {
      newData[props.weapon.type][props.index].camos[index].completion = false;
      newData[props.weapon.type][props.index].gold = false;
    }

    localStorage.setItem("atomic", JSON.stringify(newData));
  };

  const onToggle = (data) => {
    setName(data.name);
    setDescription(data.description);
    setCurrent(data.current);
    setRequired(data.required);
    setImage(data.image);
    setIndex(data.index);
  };
  return (
    <>
      <div className={backgroundContainer}>
        <div className="weapon-header-container">
          <h2 className="weapon-header">{props.weapon.name}</h2>
        </div>
        <div className="camos">
          {props.weapon.camos.map((camo, index) => {
            return (
              <Camo
                index={index}
                camo={camo}
                id={props.weapon.name}
                key={index}
                onToggle={onToggle}
              />
            );
          })}
        </div>
      </div>
      <CamoCollapse
        index={props.index}
        weapon={props.weapon}
        id={props.weapon.name}
        name={name}
        description={description}
        current={current}
        required={required}
        image={image}
        changeCamo={camoProgressUpdate}
      />
    </>
  );
}
