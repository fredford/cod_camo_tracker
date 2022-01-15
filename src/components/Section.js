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

  const clickCamo = () => {
    console.log("here");
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
                    <div className="camo-container" key={key} onClick={() => clickCamo()}>
                      <img
                        src={camoFiles[key]}
                        alt={item.camos[key].description}
                        className="camo-image"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-check checkrotate"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
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
