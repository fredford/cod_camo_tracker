import React from "react";

export default function Item(props) {
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
    <div className="card standard">
      <h3 className="margin-left">{props.item.name}</h3>
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
    </div>
  );
}
