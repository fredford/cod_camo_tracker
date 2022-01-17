import React, { useState } from "react";

export default function Section(props) {
  const [isOpen, setIsOpen] = useState(false);
  var section = props.name;
  var weapons = props.weapons;

  function setGoldColor(index) {
    var setGold = "weapon-progress ";
    if (weapons[index].gold) {
      setGold += "weapon-completed";
    }
    return setGold;
  }

  function setCamoCompleted(index, key) {
    var setCamo = "camo-image ";

    if (weapons[index].camos[key].completion) {
      setCamo += "camo-completed";
    }
    return setCamo;
  }

  const clickGold = (index) => {
    props.updateWeapon(section, index, "gold");
  };

  const clickCamo = (key, index) => {
    props.updateWeapon(section, index, "camo", key);
  };

  function clickName(index) {
    console.log("here");
  }

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div key={section}>
      {/*
        Section header for weapon class
      */}
      <div className="container-section-header">
        <h2 className="section-header">{section}</h2>
      </div>
      {/*
        Grouping of weapons for the class
      */}
      <div className="container-weapons">
        {weapons.map((item, index) => {
          return (
            <div className="card weapon-section text-center" key={index}>
              {/*
              Weapon header
              */}
              <div className="container-weapon-header" onClick={() => clickName(index)}>
                <h6 className="weapon-header">{item.name}</h6>
              </div>

              {/*
              Gold button
              */}
              <div className={setGoldColor(index)} onClick={() => clickGold(index)}>
                <h6 className="gold-header">Gold</h6>
              </div>
              {/*
              Grouping of camo buttons
              */}
              <div className="container-camos">
                {Object.keys(item.camos).map((key) => (
                  <div
                    className="container-camo"
                    key={key}
                    onClick={() => clickCamo(key, index)}
                  >
                    <div
                      className={setCamoCompleted(index, key)}
                      id={item.camos[key].name}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
