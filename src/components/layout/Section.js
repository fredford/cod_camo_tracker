import React from "react";
import Weapon from "../Weapon";
import SectionHeader from "./headers/SectionHeader";

export default function Section(props) {
  return (
    <>
      <SectionHeader name={props.name} />
      <div className="container-weapons">
        {props.value.map((weapon, index) => (
          <Weapon key={weapon.name} weapon={weapon} index={index} />
        ))}
      </div>
    </>
  );
}
