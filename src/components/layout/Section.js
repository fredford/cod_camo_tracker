// Library imports
import React, { Fragment, useContext } from "react";
// Local components
import Weapon from "../Weapon";
// Context
import { GameContext } from "../../contexts/GameContext";

const Section = ({ weaponGroup, showCompleted }) => {
  const context = useContext(GameContext);
  const typeValue = context.type[0];
  const [dataValue, setDataValue] = context.data;

  const updateData = (weapon, checkType) => {
    let cloneData = Object.assign(Object.create(Object.getPrototypeOf(dataValue)), dataValue);

    weaponGroup.checkForDiamond();

    cloneData.weaponGroups[weapon.type].weapons[weapon.name] = weapon;

    setDataValue(cloneData);
    localStorage.setItem(typeValue, JSON.stringify(cloneData));
  };

  return (
    <Fragment>
      <div className="section-header">
        <h2>{weaponGroup.name}</h2>
      </div>
      <div className="container-weapons">
        {Object.entries(weaponGroup.weapons).map(([name, weapon]) => {
          if ((!showCompleted && !weapon.gold) || showCompleted) {
            return (
              <Weapon
                key={JSON.stringify(weapon)}
                weapon={weapon}
                index={name}
                typeValue={typeValue}
                setDataValue={setDataValue}
                updateData={updateData}
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
