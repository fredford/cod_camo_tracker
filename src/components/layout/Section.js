import React from "react";
import Weapon from "../Weapon";
import SectionContainer from "./containers/SectionContainer";
import SectionHeader from "./headers/SectionHeader";

export default function Section({ name, weaponsList }) {
  return (
    <>
      <SectionHeader name={name} />
      <SectionContainer>
        {weaponsList.map((weapon, index) => (
          <Weapon key={weapon.name} weapon={weapon} index={index} />
        ))}
      </SectionContainer>
    </>
  );
}
