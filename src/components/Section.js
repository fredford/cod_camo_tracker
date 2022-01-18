import React from "react";

import ReactTooltip from "react-tooltip";

function Section(props) {
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

  function clickEdit(index) {
    console.log("here");
  }

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
            <div className="card weapon-section" key={index}>
              {/*
              Weapon header
              */}
              <div className="container-weapon-header">
                <h5 className="weapon-header">{item.name}</h5>
              </div>

              {/*
              Gold button
              */}
              <div className="row">
                <div className="col quarter-padding-right">
                  <div className={setGoldColor(index)} onClick={() => clickGold(index)}>
                    <h6 className="gold-header">Gold</h6>
                  </div>
                </div>
                <div className="col quarter-padding-left">
                  <button className="edit-button" onClick={() => clickEdit(index)}>
                    <h6 className="edit-header">Expand</h6>
                  </button>
                </div>
              </div>
              {/*
              Grouping of camo buttons
              */}
              <div className="container-camos">
                {Object.keys(item.camos).map((key) => (
                  <React.Fragment key={key}>
                    <button
                      className="container-camo"
                      key={key}
                      onClick={() => clickCamo(key, index)}
                      data-tip={item.camos[key].description}
                    >
                      <div
                        className={setCamoCompleted(index, key)}
                        id={item.camos[key].name}
                      ></div>
                    </button>
                    <ReactTooltip />
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
