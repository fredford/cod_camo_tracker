// Library imports
import React, { Fragment, useContext } from "react";
// Local components
import Weapon from "../Weapon";
// Context
import { GameContext } from "../../contexts/GameContext";

const Section = ({ weaponGroup, showCompleted }) => {
  // Weapong groups context information
  const context = useContext(GameContext);
  const typeValue = context.type[0];
  const [dataValue, setDataValue] = context.data;

  // Function to update the current data object in the Game Context
  const updateData = (weapon, checkType) => {
    // Clone the class object
    let cloneData = Object.assign(Object.create(Object.getPrototypeOf(dataValue)), dataValue);
    // Check if any updates to the weapon group are required for diamond
    weaponGroup.checkForDiamond();
    // Update the current data object in the Game Context with the weapon changes
    cloneData.weaponGroups[weapon.type].weapons[weapon.name] = weapon;
    // Set the new data value of the Game Context
    setDataValue(cloneData);
    // Updtea the localStorage data
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
