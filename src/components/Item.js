import React from "react";
import camoFiles from "../data/Atomic/camoFiles";

export default function Item(props) {
  console.log(props.item);

  console.log(props.data[props.game][props.section][props.index]);
  var data = props.data;

  console.log(props.data);

  var setGold = "weapon-progress card ";

  if (props.item.gold) {
    setGold += "weapon-completed";
  }

  const clickGold = () => {
    data[props.game][props.section][props.index].gold =
      !data[props.game][props.section][props.index].gold;

    props.changeGold(props.index);
    localStorage.setItem("data", JSON.stringify(data));
  };

  const onChange = (e) => {
    console.log(e);
    var oldData = JSON.parse(localStorage.getItem("data"));

    oldData[props.section].forEach((gun, index) => {
      console.log();
      if (gun.name === props.item.name) {
        var oldValue = oldData[props.section][index].progress[e[0]].completed;
        oldData[props.section][index].progress[e[0]].completed = !oldValue;
        console.log(oldData[props.section][index].progress[e[0]].completed);

        console.log(oldData);

        localStorage.setItem("data", JSON.stringify(oldData));
      }
    });
  };
  return (
    <div className="">
      <div className="camo-name card">
        <h6 className="fw-bold">{props.item.name}</h6>
      </div>
      <div className={setGold} onClick={() => clickGold()}>
        <h6 className="fw-bold">Gold</h6>
      </div>
      <div className="camo-progress">
        {Object.keys(props.item.camos).map((key) => (
          <div key={key}>
            <img
              src={camoFiles[key]}
              alt={props.item.camos[key].description}
              className="camo"
            />
          </div>
        ))}
      </div>
      {/*
      {Object.entries(props.item.progress).map((camo) => {
        return (
          <div key={camo[0]}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={camo[1].completed}
              id="flexCheckDefault"
              onChange={() => onChange(camo)}
            />
            <label className="form-check-label" id="flexCheckDefault">
              {camo[0]}: {camo[1].current}/{camo[1].total}
            </label>
          </div>
        );
      })}
    */}
    </div>
  );
}
