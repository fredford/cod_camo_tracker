import React from "react";

export default function Camo(props) {
  var target = "#" + props.id;

  const onToggle = () => {
    props.onToggle({
      name: props.camo.name,
      description: props.camo.description,
      current: props.camo.current,
      required: props.camo.required,
    });
  };

  return (
    <div className="camo">
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={target}
        aria-expanded="false"
        aria-controls={props.id}
        onClick={onToggle}
        className="camo-button"
      >
        <img className="camo-image" src={require("../assets/camo.png")} alt="camo" />
      </button>
    </div>
  );
}
