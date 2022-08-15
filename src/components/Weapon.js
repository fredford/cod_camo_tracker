// Library imports
import React, { useCallback, useState } from "react";
// Local components
import Camo from "./Camo";
import CamoCollapse from "./CamoCollapse";
import WeaponHeader from "./layout/headers/WeaponHeader";
// Utilities
import { checkEveryStatus } from "../utilities";

const areEqual = (prevProp, nextProp) => {
  return true;
};

const Weapon = ({ weapon, index, typeValue, setDataValue, updateData }) => {
  // Set component state
  const [camo, setCamo] = useState({});
  const [camoIndex, setCamoIndex] = useState(0);

  var backgroundContainer = "card weapon ";

  var buttonBackground = "btn gold-button ";

  if (weapon.diamond) {
    backgroundContainer += "diamond";
    buttonBackground += "gold";
  } else if (weapon.gold) {
    backgroundContainer += "gold";
    buttonBackground += "gold";
  }

  console.log(camo, camoIndex);

  const camoProgressUpdate = useCallback((e) => {
    camo.current = e;

    camo.updateCompletion();

    weapon.checkForGold();

    updateData(weapon);

    setCamo(camo);
  });

  /**
   * Function to set the Camo object to the current state
   * @param {object} camo - Camo object to be displayed
   * @param {number} index - Index of the camo in the camos array
   */
  const onToggle = (camo, index) => {
    setCamo(camo);
    setCamoIndex(index);
  };

  /**
   * Function to toggle completion on the camo
   */
  const onToggleCamo = () => {
    // Change boolean status of completion
    camo.toggleCompletion();
    // Check if this action updates the Gold status
    weapon.checkForGold();
    // Update the weapon with the Context data
    updateData(weapon);
  };

  /**
   * Function to toggle Gold on the weapon
   */
  const onToggleGold = () => {
    // Call class method to toggle Gold on the weapon
    weapon.toggleGold();
    // Update weapon with the weapon group
    updateData(weapon);
  };

  var id = "w".concat(weapon.name.toLowerCase().replace(/\s/g, ""));

  return (
    <>
      <div className={backgroundContainer}>
        <WeaponHeader header={weapon.name} />

        <div className="camos">
          {weapon.camos.map((camo, cIndex) => {
            return (
              <Camo camo={camo} id={weapon.name} key={cIndex} index={cIndex} onToggle={onToggle} />
            );
          })}
        </div>
        <div className="gold-button-container">
          <button className={buttonBackground} onClick={onToggleGold}>
            GOLD
          </button>
        </div>
      </div>

      <CamoCollapse
        id={id}
        camo={camo}
        changeCamo={camoProgressUpdate}
        onToggleCamo={onToggleCamo}
      />
    </>
  );
};

export default React.memo(Weapon, areEqual);
