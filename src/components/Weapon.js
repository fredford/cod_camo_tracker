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
    setCurrent(e);

    dataValue[props.weapon.type][props.index].camos[index].current = e;

    if (e === required) {
      dataValue[props.weapon.type][props.index].camos[index].completion = true;

      var diamondCheck = dataValue[props.weapon.type].every(function (weapon) {
        return weapon.gold === true;
      });

      if (diamondCheck) {
        dataValue[props.weapon.type].forEach(function (weapon, index) {
          weapon.diamond = true;
          dataValue[props.weapon.type][index].diamond = true;
          localStorage.setItem("atomic", JSON.stringify(dataValue));
        });
      } else {
        dataValue[props.weapon.type].forEach(function (weapon, index) {
          weapon.diamond = false;
          dataValue[props.weapon.type][index].diamond = false;
          localStorage.setItem("atomic", JSON.stringify(dataValue));
        });
      }

      var goldCheck = props.weapon.camos.every(function (v) {
        return v.completion === true;
      });

      if (goldCheck) {
        dataValue[props.weapon.type][props.index].gold = true;
      }
    } else {
      dataValue[props.weapon.type][props.index].camos[index].completion = false;
      dataValue[props.weapon.type][props.index].gold = false;
    }

    localStorage.setItem("atomic", JSON.stringify(dataValue));
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
