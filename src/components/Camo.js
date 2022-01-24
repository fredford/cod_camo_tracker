import React from "react";

export default function Camo(props) {
  var target = "#" + props.id;

  var camoPath = "/atomic/" + props.camo.image + ".png";

  const onToggle = () => {
    props.onToggle({
      name: props.camo.name,
      image: props.camo.image,
      description: props.camo.description,
      current: props.camo.current,
      required: props.camo.total,
      index: props.index,
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
        <img className="camo-image" src={camoPath} alt="camo" />
      </button>
    </div>
  );
}
