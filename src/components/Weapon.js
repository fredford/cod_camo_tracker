// Library imports
import React, { useState } from "react";
// Local components
import Camo from "./Camo";
import CamoCollapse from "./CamoCollapse";

const areEqual = (prevProp, nextProp) => {
  return true;
};

const Weapon = ({ weapon, index, typeValue, setDataValue, updateData }) => {
  // Set component state
  const [camo, setCamo] = useState({});
  const [show, setShow] = useState(false);
  // State for the camo value used in tracking individual item progress
  const [value, setValue] = useState(0);

  // Class properties for the weapon card
  var backgroundContainer = "card weapon ";
  // Button background color
  var buttonBackground = "btn gold-button ";

  // Check if the weapon is gold or diamond and change the background colors accordingly
  if (weapon.diamond) {
    backgroundContainer += "diamond";
    buttonBackground += "gold";
  } else if (weapon.gold) {
    backgroundContainer += "gold";
    buttonBackground += "gold";
  }

  /**
   * Function to update the progress of the weapon group for camo changes
   */
  const camoProgressUpdate = (e) => {
    // Update the camo progress
    camo.current = e;
    // Check completion status of camo
    camo.updateCompletion();
    // Check completion status of weapon
    weapon.checkForGold();
    // Update the Weapon group state for the weapon
    updateData(weapon);
    // Set the state of Camo for the updated camo
    setCamo(camo);
  };

  /**
   * Function to set the Camo object to the current state
   * @param {object} camo - Camo object to be displayed
   * @param {number} index - Index of the camo in the camos array
   */
  const onToggle = (camo, index) => {
    setCamo(camo);
    setValue(camo.current);
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

  // Set the id for the camo
  var id = "w".concat(weapon.name.toLowerCase().replace(/\s/g, ""));

  return (
    <>
      <div className={backgroundContainer}>
        <div className="weapon-header-container">
          <h2 className="weapon-header">{weapon.name}</h2>
        </div>
        <div className="camos">
          {weapon.camos.map((camo, cIndex) => {
            return (
              <Camo
                camo={camo}
                id={weapon.name}
                key={cIndex}
                index={cIndex}
                onToggle={onToggle}
                setShow={setShow}
                show={show}
              />
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
        show={show}
        changeCamo={camoProgressUpdate}
        onToggleCamo={onToggleCamo}
        value={value}
        setValue={setValue}
      />
    </>
  );
};

export default React.memo(Weapon, areEqual);
