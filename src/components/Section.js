import React from "react";
import Item from "./Item";

import camoFiles from "../data/Atomic/camoFiles";

export default function Section(props) {
  var section = props.name;
  var weapons = props.weapons;

  function setGoldColor(index) {
    var setGold = "weapon-progress ";
    if (weapons[index].gold) {
      setGold += "weapon-completed";
    }
    return setGold;
  }

  const clickGold = (index) => {
    props.updateWeapon(section, index, "gold");
  };

  const clickCamo = () => {
    console.log("here");
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
              <div className="container-weapon-header">
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
                  <div className="container-camo" key={key} onClick={() => clickCamo()}>
                    <img
                      src={camoFiles[key]}
                      alt={item.camos[key].description}
                      className="camo-image"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-square-fill checkrotate"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                    </svg>
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
