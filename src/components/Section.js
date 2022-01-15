import React from "react";
import Item from "./Item";

import camoFiles from "../data/Atomic/camoFiles";

export default function Section(props) {
  var section = props.name;
  var weapons = props.weapons;

  function setGoldColor(index) {
    var setGold = "weapon-progress card ";
    if (weapons[index].gold) {
      setGold += "weapon-completed";
    }
    return setGold;
  }

  const clickGold = (index) => {
    props.updateWeapon(section, index, "gold");
  };

  return (
    <div key={section}>
      <h2 className="">{section}</h2>
      <div className="class-section">
        {weapons.map((item, index) => {
          return (
            <div className="card standard weapon-section" key={index}>
              <div className="">
                <div className="camo-name card">
                  <h6 className="fw-bold">{item.name}</h6>
                </div>
                <div className={setGoldColor(index)} onClick={() => clickGold(index)}>
                  <h6 className="fw-bold">Gold</h6>
                </div>
                <div className="camo-progress">
                  {Object.keys(item.camos).map((key) => (
                    <div key={key}>
                      <img
                        src={camoFiles[key]}
                        alt={item.camos[key].description}
                        className="camo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
