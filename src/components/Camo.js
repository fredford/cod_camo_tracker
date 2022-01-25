import React from "react";

export default function Camo({ camo, id, onToggle, index }) {
  var target = "#" + id;

  var camoPath = "/atomic/" + camo.image + ".png";

  const onChange = () => {
    onToggle(camo, index);
  };

  return (
    <div className="camo">
      <button
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={target}
        aria-expanded="false"
        aria-controls={id}
        onClick={onChange}
        className="camo-button"
      >
        <img className="camo-image" src={camoPath} alt="camo" />
      </button>
    </div>
  );
}
