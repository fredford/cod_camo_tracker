// Library imports
import React, { Fragment } from "react";
// Local components
import Weapon from "../Weapon";

const Section = ({ weaponGroup, showCompleted }) => {
  return (
    <Fragment>
      <div className="section-header">
        <h2>{weaponGroup.name}</h2>
      </div>
      <div className="container-weapons">
        {weaponGroup.weapons.map((weapon, index) => {
          if ((!showCompleted && !weapon.gold) || showCompleted) {
            return <Weapon key={weapon.name} weapon={weapon} index={index} />;
          } else {
            return <Fragment></Fragment>;
          }
        })}
      </div>
    </Fragment>
  );
};

export default Section;
