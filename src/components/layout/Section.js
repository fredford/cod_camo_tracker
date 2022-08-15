// Library imports
import React, { Fragment, useContext } from "react";
// Local components
import Weapon from "../Weapon";
// Context
import { GameContext } from "../../contexts/GameContext";

const Section = ({ weaponGroup, showCompleted }) => {
  const context = useContext(GameContext);
  const typeValue = context.type[0];
  const setDataValue = context.data[1];

  return (
    <Fragment>
      <div className="section-header">
        <h2>{weaponGroup.name}</h2>
      </div>
      <div className="container-weapons">
        {weaponGroup.weapons.map((weapon, index) => {
          if ((!showCompleted && !weapon.gold) || showCompleted) {
            return (
              <Weapon
                key={JSON.stringify(weapon)}
                weapon={weapon}
                index={index}
                typeValue={typeValue}
                setDataValue={setDataValue}
              />
            );
          } else {
            return <Fragment></Fragment>;
          }
        })}
      </div>
    </Fragment>
  );
};

export default Section;
