import React, { Fragment } from "react";
import Weapon from "../Weapon";
import SectionContainer from "./containers/SectionContainer";
import SectionHeader from "./headers/SectionHeader";

const Section = ({ weaponGroup, showCompleted }) => {
  return (
    <Fragment>
      <SectionHeader name={weaponGroup.name} />
      <SectionContainer>
        {weaponGroup.weapons.map((weapon, index) => {
          if ((!showCompleted && !weapon.gold) || showCompleted) {
            return <Weapon key={weapon.name} weapon={weapon} index={index} />;
          } else {
            return <Fragment></Fragment>;
          }
        })}
      </SectionContainer>
    </Fragment>
  );
};

export default Section;
