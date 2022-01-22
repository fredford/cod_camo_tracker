import React, { useContext, useState } from "react";
import Camo from "./Camo";
import CamoCollapse from "./CamoCollapse";

import { GameContext } from "../contexts/GameContext";

export default function Weapon(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [current, setCurrent] = useState("");
  const [required, setRequired] = useState("");

  const { game, type } = useContext(GameContext);

  console.log(game);

  const onToggle = (data) => {
    setName(data.name);
    setDescription(data.description);
    setCurrent(data.current);
    setRequired(data.required);
  };
  return (
    <>
      <div className="card m-2 p-3 weapon">
        <div className="">
          <h2 className="weapon-header">{props.name}</h2>
        </div>
        <div className="camos">
          <Camo camo={camo1} id={props.name} onToggle={onToggle} />
          <Camo camo={camo2} id={props.name} onToggle={onToggle} />
          <Camo camo={camo3} id={props.name} onToggle={onToggle} />
          <Camo camo={camo4} id={props.name} onToggle={onToggle} />
          <Camo camo={camo5} id={props.name} onToggle={onToggle} />
          <Camo camo={camo6} id={props.name} onToggle={onToggle} />
          <Camo camo={camo7} id={props.name} onToggle={onToggle} />
          <Camo camo={camo8} id={props.name} onToggle={onToggle} />
          <Camo camo={camo9} id={props.name} onToggle={onToggle} />
          <Camo camo={camo10} id={props.name} onToggle={onToggle} />
        </div>
      </div>
      <CamoCollapse
        id={props.name}
        name={name}
        description={description}
        current={current}
        required={required}
      />
    </>
  );
}

const camo1 = {
  name: "Pack Tactics",
  description: "400 kills",
  current: 400,
  required: 400,
};

const camo2 = {
  name: "Surgical",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo3 = {
  name: "Predatory Ambition",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo4 = {
  name: "Reptilian",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo5 = {
  name: "Deadeye",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo6 = {
  name: "Berserker",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo7 = {
  name: "Wildcat",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo8 = {
  name: "Survivalist",
  description: "100 headshots",
  current: 0,
  required: 100,
};

const camo9 = {
  name: "Mindgames",
  description: "100 headshots",
  current: 0,
  required: 100,
};
const camo10 = {
  name: "Death Artist",
  description: "100 headshots",
  current: 0,
  required: 100,
};
