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

  const { game, type, data } = useContext(GameContext);

  console.log(props.weapon.camos);
  console.log(props.weapon);

  var backgroundContainer = "card m-2 p-2 weapon ";

  if (props.weapon.gold) {
    backgroundContainer += "completed";
  }

  const onToggle = (data) => {
    setName(data.name);
    setDescription(data.description);
    setCurrent(data.current);
    setRequired(data.required);
    setImage(data.image);
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
              <Camo camo={camo} id={props.weapon.name} key={index} onToggle={onToggle} />
            );
          })}
        </div>
      </div>
      <CamoCollapse
        id={props.weapon.name}
        name={name}
        description={description}
        current={current}
        required={required}
        image={image}
      />
    </>
  );
}
